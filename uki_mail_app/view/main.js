include('../view.js');

uki.view.declare('uki_mail_app.view.Main', uki.view.Box, function(Base) {
    
    this._createDom = function() {
        Base._createDom.call(this);
        uki([
            // toolbar
            { view: 'Box', rect: '1000 68', anchors: 'left top right', 
              background: 'theme(panel-dark)', childViews: [
                { view: 'Label', rect: '0 0 1000 20', anchors: 'left top right', 
                    style: { textAlign: 'center', textShadow: '0 1px 0px rgba(255,255,255,0.8)', color: '#000' },
                    text: 'Inbox – voloko@gmail.com (100 messages)' },
                    
                { view: 'uki_mail_app.view.Toolbar', rect: '0 25 1000 23', anchors: 'left top right',
                algorithm: 'ResizeLast',
                childViews: [
                    { view: 'Box', rect: '60 23', anchors: 'left top', textSelectable: false, childViews:
                        { view: 'uki_mail_app.view.ToolbarButton', label: 'Get Mail', rect: '10 0 41 23', anchors: 'left top', backgroundPrefix: 'toolbar-button-full-',
                            icon: uki.theme.imageSrc('toolbar-get-mail') }
                    },

                    { view: 'Box', rect: '100 23', anchors: 'left top', spacer: true, minSize: '30 0', prefferedWidth: '190'  },
                    
                    { view: 'uki_mail_app.view.Toolbar', rect: '750 23', anchors: 'left top right', textSelectable: false,
                    childViews: [
                        { view: 'Box', rect: '110 23', anchors: 'left top',
                        childViews: [
                            { view: 'uki_mail_app.view.ToolbarButton', rect: '0 0 55 23', label: 'Delete', anchors: 'left top', backgroundPrefix: 'toolbar-button-left-',
                                icon: uki.theme.imageSrc('toolbar-delete'), togglable: 1, not_empty: 1 },
                            { view: 'uki_mail_app.view.ToolbarButton', rect: '54 0 55 23', label: 'Junk', anchors: 'left top', backgroundPrefix: 'toolbar-button-right-',
                                icon: uki.theme.imageSrc('toolbar-junk'), togglable: 1, not_empty: 1 }
                        ] },
                    
                        { view: 'Box', rect: '351 23', anchors: 'left top',
                        childViews: [
                            { view: 'uki_mail_app.view.ToolbarButton', rect: '10 0 55 23', label: 'Reply', anchors: 'left top', backgroundPrefix: 'toolbar-button-left-',
                                icon: uki.theme.imageSrc('toolbar-reply'), togglable: 1, not_empty: 1, not_multy: 1 },
                            { view: 'uki_mail_app.view.ToolbarButton', rect: '64 0 55 23', label: 'Reply All', anchors: 'left top', backgroundPrefix: 'toolbar-button-mid-',
                                icon: uki.theme.imageSrc('toolbar-reply-all'), togglable: 1, not_empty: 1, not_multy: 1 },
                            { view: 'uki_mail_app.view.ToolbarButton', rect: '118 0 55 23', label: 'Forward', anchors: 'left top', backgroundPrefix: 'toolbar-button-right-',
                                icon: uki.theme.imageSrc('toolbar-forward'), togglable: 1, not_empty: 1 },
                            
                            { view: 'uki_mail_app.view.ToolbarButton', label: 'Redirect', rect: '190 0 41 23', anchors: 'left top', backgroundPrefix: 'toolbar-button-full-',
                                icon: uki.theme.imageSrc('toolbar-redirect'), togglable: 1, not_empty: 1, not_multy: 1 },

                            { view: 'uki_mail_app.view.ToolbarButton', label: 'New Message', rect: '260 0 41 23', anchors: 'left top', backgroundPrefix: 'toolbar-button-full-',
                                icon: uki.theme.imageSrc('toolbar-new') }
                        ] },
                    
                        
                        { view: 'Box', rect: '100 23', anchors: 'left top', spacer: true, minSize: '10 0' },
                    
                        { view: 'Box', rect: '200 23', anchors: 'top right', childViews:
                            { view: 'uki_mail_app.view.SearchField', rect: '10 1 170 22', anchors: 'right top', backgroundPrefix: 'search-', label: 'Search' }
                        }
                    
                    ]}
                ]}
              ] },
            // content
            { view: 'HSplitPane', rect: '0 68 1000 932', anchors: 'left top right bottom',
              handlePosition: 250, minLeft: 150, handleWidth: 1,
              leftChildViews: [
              
                // left folder tree
                { view: 'ScrollPane', rect: '250 910', anchors: 'left top right bottom', background: '#DDE4EB', childViews: [
                    { view: 'uki_mail_app.view.Folders', rect: '250 200', anchors: 'left top right', 
                      style: { fontSize: '12px' },
                      childViews: [
                        { view: 'Label', rect: '250 20', anchors: 'left top right', text: 'MAILBOXES', inset: '6 0 2 9',
                            background: 'theme(tree-list-header)' },
                        { view: 'uki.more.view.TreeList', rect: '250 10', anchors: 'left top right', 
                            style: {fontSize: '11px', fontFamily: uki.theme.style('fontFamily'), lineHeight: '11px' },
                            render: new uki_mail_app.view.folders.Render(),
                            data: [
                            { data: 'Inbox', icon: 'mb-inbox', name: 'INBOX', dropTarget: true },
                            { data: 'Drafts', icon: 'mb-drafts', name: 'Drafts', dropTarget: true },
                            { data: 'Sent', icon: 'mb-sent', name: 'Sent', dropTarget: true },
                            { data: 'Trash', icon: 'mb-trash', name: 'Trash', dropTarget: true }
                        ], rowHeight: 20, focusable: false, textSelectable: false },
                        { view: 'Label', rect: '250 23', anchors: 'left top right', text: 'MAIL@UKIJS.ORG', inset: '6 0 2 9',
                            background: 'theme(tree-list-header)' },
                        { view: 'uki.more.view.TreeList', rect: '250 10', anchors: 'left top right', 
                          style: {fontSize: '11px', fontFamily: uki.theme.style('fontFamily'), lineHeight: '11px' },
                          render: new uki_mail_app.view.folders.Render(),
                          data: [
                            { data: '[Gmail]', icon: 'mb-folder-empty', __opened: true,
                                children: [
                                    { data: 'All Mail', icon: 'mb-folder', name: 'gmail/all_mail', dropTarget: true },
                                    { data: 'Drafts', icon: 'mb-folder', name: 'gmail/drafts', dropTarget: true },
                                    { data: 'Sent Mail', icon: 'mb-folder', name: 'gmail/sent_mail', dropTarget: true },
                                    { data: 'Spam', icon: 'mb-folder', name: 'gmail/spam', dropTarget: true },
                                    { data: 'Starred', icon: 'mb-folder', name: 'gmail/starred', dropTarget: true },
                                    { data: 'Trash', icon: 'mb-folder', name: 'gmail/trash', dropTarget: true }
                                ]},
                            { data: 'Label 1', icon: 'mb-folder', name: 'gmail/label1', dropTarget: true },
                            { data: 'Label 2', icon: 'mb-folder', name: 'gmail/label2', dropTarget: true },
                            { data: 'Label 3', icon: 'mb-folder', name: 'gmail/label3', dropTarget: true }
                        ], rowHeight: 20, focusable: false, textSelectable: false }
                    ] }
                ] },
                // left toolbar
                { view: 'Box', rect: '0 910 250 22', anchors: 'left bottom right', background: 'theme(panel-light)' }
              ],
              
              rightChildViews: [
                { view: 'VSplitPane', rect: '749 932', anchors: 'left top right bottom', handleWidth: 10,
                  handlePosition: 200, minTop: 100,
                  topChildViews: [
                    // message list
                    { view: 'uki_mail_app.view.MessageTable', rect: '749 200', anchors: 'left top right bottom', 
                        style: { fontSize: '12px', lineHeight: '12px' }, multiselect: true }
                  ],
                  bottomChildViews: [
                    // message
                    // { view: 'Box', rect: '100 10 100 100', anchors: 'left top', background: '#CCC', id: 'drop' }
                  ]
                }
              ]
            }
        ]).appendTo(this);
        
        uki('Folders', this)[0].relayout();
        uki('Folders', this)[0].selectedRow(uki('Folders TreeList:eq(0)', this).data()[0]);
        uki('Folders', this).parent().attr('textSelectable', false);
        var spacer = uki('Toolbar [spacer]', this)[0];

        uki('HSplitPane', this).bind('handleMove', function(e) {
            spacer.prefferedWidth = this.handlePosition() - 60;
            spacer.parent()._resizeChildViews();
            spacer.parent().layout();
        });
        
        var toolbar = uki('Toolbar:eq(0)', this);
        uki('MessageTable List', this).bind('selection', function() {
           var indexes = this.selectedIndexes();
           uki('[togglable]', toolbar).disabled(false);
           if (indexes.length == 0) uki('[not_empty]', toolbar).disabled(true);
           if (indexes.length > 1) uki('[not_multy]', toolbar).disabled(true);
        }).trigger('selection');
        
        // uki('#drop', this).dragover(function(e) {
        //     e.preventDefault();
        //     e.dataTransfer.dropEffect = e.dataTransfer.effectAllowed.indexOf('copy') > -1 ? 'copy' : 'move';
        //     console.log([e.dataTransfer.effectAllowed, e.dataTransfer.dropEffect]);
        // }).drop(function(e) {
        //     e.preventDefault();
        //     console.log(e.dataTransfer);
        //     for (var i=0; i < e.dataTransfer.files.length; i++) {
        //         console.log(e.dataTransfer.files[i]);
        //     }
        //     for (var i=0; i < e.dataTransfer.types.length; i++) {
        //         console.log(e.dataTransfer.types[i]);
        //         console.log(e.dataTransfer.getData(e.dataTransfer.types[i]));
        //     };
        // });
        
    }; 
   
});