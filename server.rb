require 'rubygems'
require 'json'
require 'redis'

r = Redis.new

def jsonp params, content
  "#{params['callback']}(#{content})"
end

# default header
get '*' do
  # sleep 1
  response.header['Content-type'] = 'application/x-javascript; charset=UTF-8'
  pass
end

# this is a test backend so simply return static mailbox structure
get '/mailbox/' do
  data = [
    { :id => 'INBOX',             :unread => r.get('mailbox:INBOX:unread').to_i,  :title => 'Inbox'  },
    { :id => 'DRAFTS',            :unread => r.get('mailbox:DRAFTS:unread').to_i, :title => 'Drafts' },
    { :id => 'SENT',              :unread => r.get('mailbox:SENT:unread').to_i,   :title => 'Sent'   },
    { :id => 'TRASH',             :unread => r.get('mailbox:TRASH:unread').to_i,  :title => 'Trash'  },
    { :id => 'gmail',             :unread => 0,   :title => '[Gmail]', :children => [
      { :id => 'gmail:all_mail',  :unread => 0,   :title => 'All Mail'  },
      { :id => 'gmail:draft',     :unread => 0,   :title => 'Drafts'    },
      { :id => 'gmail:sent_mail', :unread => 0,   :title => 'Sent Mail' },
      { :id => 'gmail:spam',      :unread => 0,   :title => 'Spam'      },
      { :id => 'gmail:starred',   :unread => 0,   :title => 'Starred'   },
      { :id => 'gmail:trash',     :unread => 0,   :title => 'Trash'     },
    ] },
    { :id => 'gmail:label1',      :unread => 0,   :title => 'Label 1'   },
    { :id => 'gmail:label2',      :unread => 0,   :title => 'Label 2'   },
    { :id => 'gmail:label3',      :unread => 0,   :title => 'Label 3'   },
  ]
  jsonp params, data.to_json
end

# get messages in inbox
get '/mailbox/:mailbox/messages/' do
  content = []
  r.lrange("mailbox:#{params[:mailbox]}:messages", 0, 1000).each do |id|
    content << r.get("message:#{id}")
  end
  jsonp params, "[#{content.join(',')}]"
end

# get message info
get '/message/:id/' do
  content = r.get("message:#{params[:id]}")
  jsonp params, content
end

# get message body
get '/message/:id/body/' do
  content = r.get("message:#{params[:id]}:body").gsub("\n", '<br />')
  jsonp params, content.to_json
end

# shortcut to moveMessages from mailbox A to mailbox B
post '/moveMessages/' do
  # move messages to mailbox
end

# update message
post '/message/:id/markAsRead/' do
  # update message, maybe update unread count
end
