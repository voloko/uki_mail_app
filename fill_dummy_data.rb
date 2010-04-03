require 'rubygems'
require 'json'
require 'csv'
require 'redis'

r = Redis.new

r.flushdb
content = CSV.parse(File.read('tmp/messages.csv'), '|').sort {|b, a| a[3] <=> b[3] }
content.each_with_index do |row, i|
  message = { 
    :id => i, 
    :unread => rand(10)>8 ? 1 : 0, 
    :from => row[5] == 'SENT' ? 'mail@ukijs.org' : "#{row[1]} <#{row[2]}>", 
    :to =>   row[5] != 'SENT' ? 'mail@ukijs.org' : "#{row[1]} <#{row[2]}>", 
    :subject => row[3], 
    :recieved => row[4].to_i, 
    :attachments => rand(10) > 8 ? rand(3) : 0
  }
  r.rpush "mailbox:#{row[5]}:messages", i
  r.incr  "mailbox:#{row[5]}:unread" if message[:unread] == 1
  r.set   "message:#{i}", message.to_json
  r.set   "message:#{i}:body", `lorem #{rand(5)+1} paragraphs`
end
