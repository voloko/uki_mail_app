require 'rubygems'
require 'json'
require 'csv'
require 'redis'

r = Redis.new

r.flushdb

message = {
  :id => 1,
  :unread => 1,
  :from => 'Vladimir Kolesnikov <voloko@gmail.com>',
  :to   => 'mail@ukijs.org',
  :subject => 'Hello World!',
  :recieved => 1258946194,
  :attachments => 0
}
r.rpush 'mailbox:INBOX:messages', 1
r.set 'message:1', message.to_json
r.set 'message:1:body', File.read('tmp/message.txt')

content = CSV.parse(File.read('tmp/messages.csv'), '|').sort {|b, a| a[3] <=> b[3] }
content.each_with_index do |row, i|
  id = i + 2
  message = { 
    :id => id, 
    :unread => rand(10)>8 ? 1 : 0, 
    :from => row[5] == 'SENT' ? 'mail@ukijs.org' : "#{row[1]} <#{row[2]}>", 
    :to =>   row[5] != 'SENT' ? 'mail@ukijs.org' : "#{row[1]} <#{row[2]}>", 
    :subject => row[3], 
    :recieved => row[4].to_i, 
    :attachments => rand(10) > 8 ? rand(3) : 0
  }
  r.rpush "mailbox:#{row[5]}:messages", id
  r.incr  "mailbox:#{row[5]}:unread" if message[:unread] == 1
  r.set   "message:#{id}", message.to_json
  r.set   "message:#{id}:body", `lorem #{rand(5)+1} paragraphs`
end
