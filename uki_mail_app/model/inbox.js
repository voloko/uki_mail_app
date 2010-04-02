include('../model.js');

uki_mail_app.model.Inbox = uki.newClass(uki.data.Model, function(Base) {
    
    this.init = function(values) {
        this._messages = [];
        this._unread = 0;
        this._length = 0;
        Base.init.call(this, values);
    };
    
    uki.data.model.addFields(this, ['unread', 'name', 'messages']);
    
    this.loadNewMessages = uki.data.model.newLoader('messages', {
        url: '/messages/?callback=?',
        requestData: function() { 
            return { 
                from: this.messages().length ? this.messages()[this.messages().length - 1].id() : '-1'
            };
        },
        setter: function(messages) {
            messages = messages || [];
            this.addMessages(this.messages().length, uki.map(messages, function(m) {
                return new uki_mail_app.model.Message(m);
            }));
            this['loaded.messages'] = false;
        },
        ajaxOptions: { dataType: 'jsonp' }
    });
    
    this.loadMessages = this.loadNewMessages;
    
    this.addMessages = function(position, messages) {
        this._messages.splice.apply(this._messages, [position, 0].concat(messages));
        this._unreadChangeHandler = this._unreadChangeHandler || uki.proxy(this._unreadChanged, this);
        for (var i = messages.length - 1; i >= 0; i--){
            messages[i].bind('change.unread', this._unreadChangeHandler);
        };
        this._updateCounts();
    };
    
    this.removeMessages = function(start, length) {
        var removed = this._messages.splice(position, start, length);
        for (var i = removed.length - 1; i >= 0; i--){
            removed[i].unbind('change.unread', this._unreadChanged);
        };
        this._updateCounts();
    };
    
    this._updateCounts = function() {
        this.unread(uki.grep(this._messages, function(m) {
            return m.unread();
        }).length);
    };
    
    this._unreadChanged = function() {
        this.unread(this.unread() - 1);
    };
    
    
});