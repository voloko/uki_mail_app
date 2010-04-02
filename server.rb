require 'rubygems'
require 'json'
require 'csv'
require 'redis'

r = Redis.new

# content = CSV.parse(File.read('tmp/messages.csv'), '|').sort {|b, a| a[3] <=> b[3] }
# content.each_with_index do |row, i|
#   message = { :id => i, :unread => row[0], :from => row[1], :subject => row[2], :recieved => (row[3].to_i - 3e7), :attachments => row[4]}
#   r.rpush 'messages', i
#   r.set   "message:#{i}", message.to_json
#   r.set   "message:#{i}:body", `lorem #{rand(5)+1} paragraphs`
# end

get '*' do
  response.header['Content-type'] = 'application/x-javascript; charset=UTF-8'
  pass
end

get '/messages/' do
  content = []
  r.lrange('messages', 0, 1000).each do |id|
    content << r.get("message:#{id}")
  end
  "#{params['callback']}([#{content.join(',')}])"
end

get '/messages/body/' do
  content = r.get("message:#{params['id']}:body").gsub("\n", '<br />')
  "#{params['callback']}(#{content.to_json})"
end