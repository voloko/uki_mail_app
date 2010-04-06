include('../model.js');

uki_mail_app.model.Mailbox = uki.newClass(uki.data.Model, function(Base) {
    
    this.init = function(values) {
        this._messages = [];
        this._unread = 0;
        this._length = 0;
        Base.init.call(this, values);
    };
    
    uki.data.model.addFields(this, ['unread', 'id', 'title', 'messages', 'children', 'sortField']);
    
    var defaultIcons = {
        INBOX: 'mb-inbox',
        DRAFTS: 'mb-drafts',
        SENT: 'mb-sent',
        TRASH: 'mb-trash'
    };
    var parentIcon = 'mb-folder-empty';
    var childIcon = 'mb-folder';
    
    
    // default icon
    this.icon = function(v) {
        return defaultIcons[this.id()] || (this.children() ? parentIcon : childIcon);
    };
    
    this.dropTarget = function(v) {
        return !this.children();
    };
    
    this.loadNewMessages = uki.data.model.newLoader('messages', {
        url: function() {
            return 'mailbox/' + this.id() + '/messages/?callback=?';
        },
        data: function() { 
            return { 
                from: this.messages().length ? this.messages()[this.messages().length - 1].id() : '-1'
            };
        },
        setter: function(messages) {
            messages = messages || [];
            // If the server really moved messages from inbox to inbox then 
            // messages and unread should be cleared
            // But since it does not we need this magical code to prevent unread updates
            if (!this._messages.length) {
                this._unread = 0;
            } else {
                this._updateCounts();
            }
            
            this.addMessages(this.messages().length, uki.map(messages, function(m) {
                return new uki_mail_app.model.Message(m);
            }), true);
            // this['loaded.messages'] = false;
        },
        ajaxOptions: { dataType: 'jsonp' }
    });
    
    this.loadMessages = this.loadNewMessages;
    
    this._sortBy = function(fieldName) {
        this._messages = this._messages.sort(function(b, a) {
            return a[fieldName]()*1 - b[fieldName]()*1;
        });
    };
    
    this.addMessages = function(position, messages) {
        this._messages.splice.apply(this._messages, [position, 0].concat(messages));
        this._unreadChangeHandler = this._unreadChangeHandler || uki.proxy(this._unreadChanged, this);
        for (var i = messages.length - 1; i >= 0; i--){
            messages[i].mailbox(this);
            messages[i].bind('change.unread', this._unreadChangeHandler);
        };
        if (this.sortField()) this._sortBy(this.sortField());
        this.trigger('change.messages');
        this._updateCounts(messages);
    };
    
    this.removeMessages = function(mids) {
        var ids = {}, removed = [];
        for (var i = mids.length - 1; i >= 0; i--){
            ids[mids[i]] = true;
        };
        this._messages = uki.grep(this._messages, function(m) {
           if (!ids[m.id()]) return true;
           m.mailbox(null);
           m.unbind('change.unread', this._unreadChanged);
           removed.push(m);
           return false;
        }, this);
        if (this.sortField()) this._sortBy(this.sortField());
        this.trigger('change.messages');
        this._updateCounts();
        return removed;
    };
    
    this._updateCounts = function(newMessages) {
        this.unread(uki.grep(newMessages || this._messages, function(m) {
            return m.unread();
        }).length + (newMessages ? this.unread() : 0));
    };
    
    this._unreadChanged = function() {
        this.unread(this.unread() - 1);
    };
    
    
});