include('../controller.js');


uki_mail_app.controller.main = function() {
    // create the views
    var context = uki_mail_app.layout.main();

    var spacer = uki('Toolbar [spacer]', context)[0];
    uki('HSplitPane', context).bind('handleMove', function(e) {
        spacer.prefferedWidth = this.handlePosition() - 60;
        spacer.parent()._resizeChildViews(spacer.rect());
        spacer.parent().layout();
    }).handlePosition(200);

    context.attachTo(window, '1000 1000');

    uki('#top', context).bind('mousedown', function(e) {
        if (e.target.tagName != 'INPUT') e.preventDefault();
    });

    // find all message meta fields
    var fields = {};
    uki('#meta [field]', context).each(function() {
        fields[this.field] = this;
    });

    var messageTable = uki('MessageTable', context);
    var toolbar = uki('Toolbar:eq(0)', context);
    var content = uki('#content', context);
    var meta = uki('#meta', context);
    var title = uki('#title', context);

    // handle message list selection
    uki('MessageTable List', context).bind('selection', function() {
        var indexes = this.selectedIndexes();

        // update toolbar buttons
        uki('[togglable]', toolbar).disabled(false);
        if (indexes.length == 0) uki('[not_empty]', toolbar).disabled(true);
        if (indexes.length > 1) uki('[not_multy]', toolbar).disabled(true);

        // hide mail contents and meta
        meta.visible(false);
        content.visible(false);

        // load mail and meta
        if (indexes.length == 1) {
            var row = this.selectedRows()[0];
            if (!row) return;
            meta.visible(true).layout();
            fields.from.text(row.from() || '');
            fields.to.text(row.to() || '');
            fields.subject.text(row.subject() || '');
            fields.recieved.text(new Date(row.recieved()*1000) || '');
            setTimeout(function() {
                if (messageTable.selectedIndexes() != indexes) return;
                row.loadBody(function(text) {
                    if (messageTable.selectedIndexes() != indexes) return;
                    if (row.unread()) {
                        row.markAsRead(function() {
                            messageTable[0].redrawCell(indexes[0], 0);
                        });
                    }
                    content.visible(true).html(text).resizeToContents('height').layout();
                });
            }, 42)
        }
    });
    
    messageTable.bind('change.messages', function() {
        var mailbox = messageTable[0].mailbox();
        if (!mailbox) {
            title.text('No Mailbox Selected');
        } else {
            title.html(mailbox.title() + ' &mdash; ' + MY_EMAIL + ' (' + mailbox.messages().length + ' messages)');
        }
    });
    
    // handle folder list selection
    var folders = uki('Folders', context);
    folders.bind('selection', function() {

        // load messages in the inbox
        var mailbox = this.selectedRow();
        if (mailbox) {
            uki('ScrollPane', messageTable).attr('scrollTop', 0);
            messageTable[0].mailbox(mailbox).selectedIndexes(mailbox.messages().length ? [0] : []).lastClickIndex(0).focus();
            
            if (!mailbox['loaded.messages']) mailbox.loadMessages(function() {
                if (mailbox == folders[0].selectedRow()) {
                    // we should store visual state (column widths, selection, column names) for the mailbox 
                    // and restore it here. For test purposes change the label only
                    messageTable[0].mailbox(this).selectedIndexes(this.messages().length ? [0] : []).lastClickIndex(0).focus();
                }
            });
        }
    });
    
    function actionWindow (action) {
        var messages = uki.map(messageTable.selectedRows(), 'id');
        window.open(location.href + '?' + uki.param({ action: action, messages: messages.join('-')}), '_blank', 'toolbar=no')
    }
    
    var actions = {
        'get-mail': function() {
            
        },
        'delete': function() {
            var messages = messageTable.selectedRows();
            if (messages.length) messages[0].mailbox().removeMessages(uki.map(messages, 'id'));
        },
        'junk': function() {
            alert('Junk mail is not supported in this demo');
        },
        'reply': function() {
            actionWindow('reply');
        },
        'reply-all': function() {
            actionWindow('reply-all');
        },
        'forward': function() {
            actionWindow('forward');
        },
        'redirect': function() {
            actionWindow('redirect');
        },
        'new-message': function() {
            actionWindow('new-message');
        }
    };
    
    uki('ToolbarButton', context).click(function(e) {
        if (actions[this.action]) actions[this.action].call(this);
    });


    // load up initial mailbox structure
    function createMailbox (data) {
        if (data.children) data.children = uki.map(data.children, createMailbox);
        data.sortField = 'recieved';
        return new uki_mail_app.model.Mailbox(data);
    }

    uki.ajax({
        url: 'mailbox/?callback=?',
        dataType: 'jsonp',
        success: function(maiboxes) {
            MAILBOXES = uki.map(maiboxes, createMailbox);

            uki('Folders', context)[0]
                .mainMailboxes( MAILBOXES.slice(0, 4) )
                .subMailboxes( MAILBOXES.slice(4) )
                .selectedRow( MAILBOXES[0] );
        }
    });    
};