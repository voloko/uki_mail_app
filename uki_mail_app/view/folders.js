include('../view.js');
include('../../frameworks/uki/uki-more/more/view/treeList.js');

uki_mail_app.view.folders = {};

uki.view.declare('uki_mail_app.view.Folders', uki.view.VFlow, function(Base) {
    
    this._setup = function() {
        Base._setup.call(this);
    };
    
    this._setMailboxes = function(listN, mb) {
        var list = uki('[selectedIndex]', this)[listN];
        list.data(mb);
        this._bindUnread(mb);
        this.resizeToContents('height').layout();
        return this;
    };
    
    this._bindUnread = function(mb) {
        uki.each(mb, function(i, m) {
            m.bind('change.unread', uki.proxy(this._unreadChanged, this, m));
            if (m.children()) this._bindUnread(m.children());
        }, this);
    };
    
    this._unreadChanged = function(m) {
        var row = this._findMailbox(m);
        if (row) row.list.redrawRow(row.position);
    };
    
    this.mainMailboxes = function(mb) {
        if (mb === undefined) return uki('[selectedIndex]:eq(0)', this).data();
        return this._setMailboxes(0, mb);
    };
    
    this.subMailboxes = function(mb) {
        if (mb === undefined) return uki('[selectedIndex]:eq(1)', this).data();
        return this._setMailboxes(1, mb);
    };
    
    this.appendChild = function(c) {
        this._bindListEvents(c);
        return Base.appendChild.apply(this, arguments);
    };
    
    this.insertBefore = function(c) {
        this._bindListEvents(c);
        return Base.insertBefore.apply(this, arguments);
    };
    
    this.removeChild = function(c) {
        this._unbindListEvents(c);
        return Base.removeChild.apply(this, arguments);
    };
    
    this.relayout = function() {
        this._listUpdate();
    };
    
    this.dropPreview = function() {
        if (!this._dropPreview) {
            this._dropPreview = uki({ view: 'Box', rect: '0 0 100 100', anchors: 'left top', style: {zIndex: 100}, background: 'theme(drop-preview)', visible: false })
                .appendTo(this)[0];
        }
        if (!this._dropPreview.parent()) this.appendChild(this._dropPreview);
        return this._dropPreview;
    };
    
    this.selectedRow = uki.newProp('_selectedRow', function(v) {
        var row = this._findMailbox(v);
        if (row) row.list.selectedIndex(row.position);
    });
    
    this._findMailbox = function(v) {
        var p = -1, result = false;
        uki('[data]', this).each(function(i, list) {
            if ( (p = uki.inArray(v, list.listData())) > -1 ) {
                result = {list: list, position: p};
                return false;
            }
        });
        return result;
    };
    
    this._createDom = function() {
        Base._createDom.call(this);
        uki.dom.bind(doc.body, 'mouseup drop dragend', uki.proxy(this._dragend, this));
        uki.dom.bind(doc.body, 'dragenter', uki.proxy(this._dragenter, this));
        uki.dom.bind(this.dom(), 'dragenter', uki.proxy(this._dragenter, this));
        this.dropPreview().bind('dragover', function(e) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        }).bind('drop', uki.proxy(this._drop, this));
    };
    
    this._unbindListEvents = function(c) {
        c.unbind('open close', this._listUpdate);
        c.unbind('open close', this._selectionUpdate);
    };
    
    this._bindListEvents = function(c) {
        if (c.selectedIndexes) {
            c.bind('open close', uki.proxy(this._listUpdate, this));
            c.bind('selection', uki.proxy(this._selectionUpdate, this, c));
            c.bind('dragover', uki.proxy(this._dragover, this, c));
            c.bind('drop', uki.proxy(this._drop, this));
        }
    };
    
    this._dragend = function(e) {
        this.dropPreview().visible(false);
    };
    
    this._dragenter = function(e) {
        if (!uki.dom.contains(this.dom(), e.target)) {
            this.dropPreview().visible(false);
        }
    };
    
    this._dragover = function(c, e) {
        var o = uki.dom.offset(c.dom()),
            y = e.pageY - o.y,
            p = y / c.rowHeight() << 0,
            row = c.listData()[p];
            
        // update drag preview position
        if (this._lastRow != row) {
            this._lastRow = row;
            if (row && row.dropTarget()) {
                this.dropPreview().visible(true);
                this.dropPreview().rect(new uki.geometry.Rect(0, c.rect().y + p * c.rowHeight() - 1, c.rect().width, c.rowHeight())).layout();
            } else {
                this.dropPreview().visible(false);
            }
            if (this._openTimeout) {
                clearTimeout(this._openTimeout);
                this._openTimeout = null;
            }
            if (row && row.children()) {
                this._openTimeout = setTimeout(uki.proxy(function() {
                    c.open(p);
                }, this), 1000);
            }
        }
        if (row && row.dropTarget()) {
            e.preventDefault();
            e.dataTransfer.dropEffect = 'move';
        }
    };
    
    this._drop = function(e) {
        debugger;
        e.preventDefault();
        var mailbox  = e.dataTransfer.getData('uki/mailbox'),
            messages = e.dataTransfer.getData('uki/messages').split(',');
        
        mailbox = findMailboxById(mailbox);
            
        if (mailbox && messages && messages.length && this._lastRow) {
            messages = mailbox.removeMessages(messages);
            this._lastRow.addMessages(0, messages);
        }
    }
    
    this._selectionUpdate = function(c, e) {
        if (!c.selectedIndexes().length) return; // empty selection comming on opening
        
        uki('[selectedIndexes]', this).each(function(i, list) {
            if (list != c) list.clearSelection();
        });
        this._selectedRow = c.selectedRows()[0];
        this.trigger('selection');
    };
    
    this._listUpdate = function() {
        uki('[selectedIndexes]', this).resizeToContents('height');
        this.resizeToContents('height');
        this.layout();
        if (this.parent()) this.parent().layout();
    };
});