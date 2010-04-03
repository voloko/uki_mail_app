include('../view.js');

uki_mail_app.view.messageTable = {};

uki.view.declare('uki_mail_app.view.MessageTable', uki.view.Table, function(Base) {
    this._setup = function() {
        Base._setup.call(this);
        this._initialWidths = [];
        this._rowHeight = 17;
    };
    
    function unreadFormatter (v) {
        return v*1 ? '<div class="unread"></div>' : '';
    }
    
    var attachmentTemplate = new uki.theme.Template(
        '<div class="attachment"></div>${count}'
    );
    
    function attachmentFormatter (v) {
        v*=1;
        if (!v) return '';
        return attachmentTemplate.render({ 
            count: v
        });
    }
    
    this.mailbox = uki.newProp('_mailbox', function(m) {
        if (this._mailbox) this._mailbox.unbind('change.messages', this._messagesChange);
        this._mailbox = m;
        this.data(m.messages());
        m.bind('change.messages', uki.proxy(this._messagesChange, this));
    });
    
    this._messagesChange = function() {
        this.data(this.mailbox().messages());
    };
    
    this._createDom = function() {
        Base._createDom.call(this);
        this._scrollPane.scrollableH(false);
        this._scrollPane.scrollV(true);
        this._header.background('theme(table-header)');
        this._list.render(new uki_mail_app.view.messageTable.Render(this));
        this._list.draggable(true).bind('dragstart', uki.proxy(this._dragstart, this));
        
        // preload images
        this.getDragImage(2).left(-999).attachTo(window);
        this.getDragImage(100).left(-999).attachTo(window);
        
            
        this.columns([
            // { view: 'uki_mail_app.view.messageTable.Column', label: '<img src="' + uki.theme.imageSrc('tree-list-header') + '" style="margin:-1px 0 0 -2px;" />', width: 19, minWidth: 19 },
            { view: 'uki_mail_app.view.messageTable.Column', label: '<img src="' + uki.theme.imageSrc('unread-header') + '" style="margin:0 0 0 1px;" />', inset: '0 0', width: 19, minWidth: 19,
                formatter: unreadFormatter, key: 'unread' },
            { view: 'uki_mail_app.view.messageTable.Column', label: 'From', width: 200, minWidth: 150, resizable: true, key: 'fromName' },
            { view: 'uki_mail_app.view.messageTable.Column', label: 'Subject', width: 300, minWidth: 150, resizable: true, key: 'subject' },
            { view: 'uki_mail_app.view.messageTable.DateColumn', label: 'Date Recieved', width: 200, minWidth: 70, resizable: true, 
                name: 'date', table: this, key: 'recieved' },
            { view: 'uki_mail_app.view.messageTable.Column', label: '<img src="' + uki.theme.imageSrc('attachment-header') + '" style="margin:-1px 0 0 1px;" />', 
                width: 30, minWidth: 30, formatter: attachmentFormatter, resizable: true, key: 'attachments' }
        ]);
        
        var classPrefix = this._list.render().classPrefix,
            style = new uki.theme.Template(
                '.${classPrefix}-selected { background: url(' + uki.theme.imageSrc('list-selected-row') + '); color: #FFF } ' +
                '.${classPrefix}-selected-blured { background: url(' + uki.theme.imageSrc('list-selected-blured-row') + '); } ' +
                '.${classPrefix}-list .unread { background: url(' + uki.theme.imageSrc('list-unread') + '); width: 16px; height: 16px; margin: -1px 0 0 1px; } ' +
                '.${classPrefix}-list .attachment { background: url(' + uki.theme.imageSrc('list-attachment') + '); width: 16px; height: 16px; margin: -1px 4px 0 1px; float: left; } ' +
                '.${classPrefix}-selected .unread { background: url(' + uki.theme.imageSrc('list-unread-selected') + '); } ' +
                '.${classPrefix}-selected .attachment { background: url(' + uki.theme.imageSrc('list-attachment-selected') + '); } '
            ).render({ 
                classPrefix: classPrefix
            });
        this._list.className(classPrefix + '-list');
        uki.dom.createStylesheet(style);
    };
    
    this.columns = uki.newProp('_columns', function(c) {
        for (var i = 0, column; i < this._columns.length; i++) {
            this._columns[i].unbind();
        }
        this._columns = uki.build(c);
        this._initialTotalWidth = 0;
        this._initialWidths = [];
        this._resizableCols = 0;
        for (i = 0; i < this._columns.length; i++) {
            column = this._columns[i];
            this._initialWidths[i] = column.width();
            if (column.resizable()) this._resizableCols++;
            column.position(i);
            // column.table(this);
            this._initialTotalWidth += column.width();
            this._columns[i].bind('beforeResize', uki.proxy(this._beforeColumnResize, this, i));
        };
        this._header.columns(this._columns);
        this._fitWidth();
    });
    
    this.relayout = function() {
        this._list.relayout();
    };
    
    this.getDragImage = function(count) {
        return uki({ view: 'uki_mail_app.view.messageTable.Drag', rect: '100 32', anchors: 'left top', count: count || this._list.selectedIndexes().length });
    };
    
    this._dragstart = function(e) {
        if (!this.selectedIndexes().length) return;
        var dt = e.dataTransfer;
        dt.effectAllowed = 'move';
        dt.setData('text/plain', uki.map(this.selectedRows(), 'summary').join('\n'));
        dt.setData('uki/messages', uki.map(this.selectedRows(), 'id').join(','));
        dt.setData('uki/mailbox', this.mailbox().id());
        dt.setDragImage(this.getDragImage(), 10, 10);
    };
    
    var processingWidths = false;
    this._beforeColumnResize = function(position, e) {
        if (processingWidths) return;
        processingWidths = true;
        var diff = e.newWidth - e.oldWidth,
            nextColumn, iw, change, i, step;
        if (diff > 0) {
            i = this._columns.length;
            step = -1;
        } else {
            i = position;
            step = 1;
        }
        do {
            nextColumn = this._columns[i+=step];
            if (i == position || !nextColumn) break;
            if (!nextColumn.resizable()) continue;
            nextColumn.maxWidth(0);
            iw = nextColumn.width();
            nextColumn.width(iw - diff);
            change = iw - nextColumn.width();
            diff -= change;
        } while (diff);
        
        this._fixMaxWidths();
        this._recalcInitialWidths();
        processingWidths = false;
    };
    
    this._recalcInitialWidths = function() {
        this._initialTotalWidth = 0;
        for (var i = 0; i < this._columns.length; i++) {
            this._initialWidths[i] = this._columns[i].width();
            this._initialTotalWidth += this._initialWidths[i];
        }
    };
    
    this._layoutDom = function(rect) {
        Base._layoutDom.call(this, rect);
        this._fitWidth();
    };
    
    this._fixMaxWidths = function() {
        var fixed = 0, offsets = [0], width = this.rect().width - uki.view.ScrollPane.initScrollWidth();
        for (var i=1; i < this._columns.length; i++) {
            offsets[i] = offsets[i-1] + this._columns[i-1].width();
        };
        for (i = this._columns.length - 1; i >= 0; i--) {
            var column = this._columns[i];
            if (column.resizable()) {
                column.maxWidth(width - offsets[i] - fixed);
            }
            fixed += column.minWidth() || column.width();
        }
    };
    
    this._fitWidth = function() {
        processingWidths = true;
        var scroll = uki.view.ScrollPane.initScrollWidth(),
            diff   = this.rect().width - scroll - this._initialTotalWidth;
        var dw, change, resizable = this._resizableCols, widths = [].concat(this._initialWidths);
        while (diff && resizable) {
            var colsToGo = resizable;
            for (var i = 0, column; colsToGo > 0 && i < this._columns.length; i++) {
                column = this._columns[i];
                column.maxWidth(0);
                if (column.resizable()) {
                    dw = diff / colsToGo << 0;
                    column.width(widths[i] + dw);
                    change = column.width() - widths[i];
                    if (change != dw) resizable--;
                    widths[i] += change;
                    diff -= change;
                    colsToGo--;
                }
            }
        };
        this._updateTotalWidth();
        this._fixMaxWidths();
        processingWidths = false;
    };
});

include('messageTable/render.js');
