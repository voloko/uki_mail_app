require 'json'
require 'csv'

get '/messages/' do
  response.header['Content-type'] = 'application/x-javascript; charset=UTF-8'
  content = CSV.parse(File.read('tmp/messages.csv'), '|').to_json
  "#{params['callback']}(#{content})"
end