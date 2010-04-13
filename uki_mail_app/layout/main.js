include('../layout.js');

uki_mail_app.layout.main = function() {
    return uki({ view: 'Box', rect: '1000 1000', anchors: 'left top right bottom',
        childViews: [
        // toolbar
        { view: 'Box', rect: '1000 68', anchors: 'left top right', id: 'top',
          background: 'theme(panel-dark)', childViews: [
            { view: 'Label', rect: '0 0 1000 20', anchors: 'left top right', id: 'title',
                style: { textAlign: 'center', textShadow: '0 1px 0px rgba(255,255,255,0.8)', color: '#000' },
                text: 'Inbox' },
                
            { view: 'uki_mail_app.view.Toolbar', rect: '0 25 1000 23', anchors: 'left top right',
            algorithm: 'ResizeLast',
            childViews: [
                { view: 'Box', rect: '60 23', anchors: 'left top', textSelectable: false, childViews:
                    { view: 'uki_mail_app.view.ToolbarButton', label: 'Get Mail', rect: '10 0 41 23', anchors: 'left top', backgroundPrefix: 'toolbar-button-full-',
                        icon: uki.theme.imageSrc('toolbar-get-mail'), action: 'get-mail' }
                },

                { view: 'Box', rect: '100 23', anchors: 'left top', spacer: true, minSize: '30 0', prefferedWidth: '190'  },
                
                { view: 'uki_mail_app.view.Toolbar', rect: '750 23', anchors: 'left top right', textSelectable: false,
                childViews: [
                    { view: 'Box', rect: '110 23', anchors: 'left top',
                    childViews: [
                        { view: 'uki_mail_app.view.ToolbarButton', rect: '0 0 55 23', label: 'Delete', anchors: 'left top', backgroundPrefix: 'toolbar-button-left-',
                            icon: uki.theme.imageSrc('toolbar-delete'), togglable: 1, not_empty: 1, action: 'delete' },
                        { view: 'uki_mail_app.view.ToolbarButton', rect: '54 0 55 23', label: 'Junk', anchors: 'left top', backgroundPrefix: 'toolbar-button-right-',
                            icon: uki.theme.imageSrc('toolbar-junk'), togglable: 1, not_empty: 1, action: 'junk' }
                    ] },
                
                    { view: 'Box', rect: '351 23', anchors: 'left top',
                    childViews: [
                        { view: 'uki_mail_app.view.ToolbarButton', rect: '10 0 55 23', label: 'Reply', anchors: 'left top', backgroundPrefix: 'toolbar-button-left-',
                            icon: uki.theme.imageSrc('toolbar-reply'), togglable: 1, not_empty: 1, not_multy: 1, action: 'reply' },
                        { view: 'uki_mail_app.view.ToolbarButton', rect: '64 0 55 23', label: 'Reply All', anchors: 'left top', backgroundPrefix: 'toolbar-button-mid-',
                            icon: uki.theme.imageSrc('toolbar-reply-all'), togglable: 1, not_empty: 1, not_multy: 1, action: 'reply-all' },
                        { view: 'uki_mail_app.view.ToolbarButton', rect: '118 0 55 23', label: 'Forward', anchors: 'left top', backgroundPrefix: 'toolbar-button-right-',
                            icon: uki.theme.imageSrc('toolbar-forward'), togglable: 1, not_empty: 1, action: 'forward' },
                        
                        { view: 'uki_mail_app.view.ToolbarButton', label: 'Redirect', rect: '190 0 41 23', anchors: 'left top', backgroundPrefix: 'toolbar-button-full-',
                            icon: uki.theme.imageSrc('toolbar-redirect'), togglable: 1, not_empty: 1, not_multy: 1, action: 'redirect' },

                        { view: 'uki_mail_app.view.ToolbarButton', label: 'New Message', rect: '260 0 41 23', anchors: 'left top', backgroundPrefix: 'toolbar-button-full-',
                            icon: uki.theme.imageSrc('toolbar-new'), action: 'new-message' }
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
          leftPane: { textSelectable: false, childViews:[
          
            // left folder tree
            { view: 'ScrollPane', rect: '250 910', anchors: 'left top right bottom', background: '#DDE4EB', childViews: [
                { view: 'uki_mail_app.view.Folders', rect: '250 200', anchors: 'left top right',
                  style: { fontSize: '12px' },
                  childViews: [
                    { view: 'Label', rect: '250 20', anchors: 'left top right', text: 'MAILBOXES', inset: '5 0 2 9',
                        background: 'theme(tree-list-header)' },
                    { view: 'uki.more.view.TreeList', rect: '250 10', anchors: 'left top right', 
                        style: {fontSize: '11px', fontFamily: uki.theme.style('fontFamily'), lineHeight: '11px' },
                        render: new uki_mail_app.view.folders.Render(),
                        data: [], rowHeight: 20, focusable: false, textSelectable: false },
                    { view: 'Label', rect: '250 22', anchors: 'left top right', text: MY_EMAIL.toUpperCase(), inset: '7 0 2 9',
                        background: 'theme(tree-list-header)' },
                    { view: 'uki.more.view.TreeList', rect: '250 10', anchors: 'left top right', 
                      style: {fontSize: '11px', fontFamily: uki.theme.style('fontFamily'), lineHeight: '11px' },
                      render: new uki_mail_app.view.folders.Render(),
                      data: [], rowHeight: 20, focusable: false, textSelectable: false }
                ] }
            ] },
            // left toolbar
            { view: 'Box', rect: '0 910 250 22', anchors: 'left bottom right', background: 'theme(panel-light)' }
          ]},
          
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
                { view: 'ScrollPane', rect: '749 722', anchors: 'left top right bottom', scrollV: true, childViews: [
                    { view: 'VFlow', rect: '10 0 729 78', anchors: 'left top right', background: 'cssBox(border-bottom: 1px solid #CCC)', 
                      id: 'meta', childViews: [
                        { view: 'Box', rect: '200 22', anchors: 'left top', childViews: [
                            { view: 'Label', rect: '0 6 50 16', anchors: 'left top', background: 'theme(field)', text: 'From:' },
                            { view: 'Label', rect: '60 6 140 16', anchors: 'left top rigth', text: '-', background: 'theme(value)',
                              field: 'from', textSelectable: true }
                        ] },
                        { view: 'Box', rect: '200 16', anchors: 'left top', childViews: [
                            { view: 'Label', rect: '0 0 50 16', anchors: 'left top', background: 'theme(field)', text: 'Subject:' },
                            { view: 'Label', rect: '60 0 140 16', anchors: 'left top rigth', text: '-', background: 'theme(value)',
                              field: 'subject', textSelectable: true, style: {fontWeight: 'bold'} }
                        ] },
                        { view: 'Box', rect: '200 16', anchors: 'left top', childViews: [
                            { view: 'Label', rect: '0 0 50 16', anchors: 'left top', background: 'theme(field)', text: 'Date:' },
                            { view: 'Label', rect: '60 0 140 16', anchors: 'left top rigth', text: '-', background: 'theme(value)',
                              field: 'recieved', textSelectable: true }
                        ] },
                        { view: 'Box', rect: '200 16', anchors: 'left top', childViews: [
                            { view: 'Label', rect: '0 0 50 16', anchors: 'left top', background: 'theme(field)', text: 'To:' },
                            { view: 'Label', rect: '60 0 140 16', anchors: 'left top rigth', text: '-', background: 'theme(value)',
                              field: 'to', textSelectable: true }
                        ] }
                      ] 
                    },
                    { view: 'Label', rect: '0 80 749 100', anchors: 'left top right', text: 'content', multiline: true, inset: '5 10',
                        id: 'content', textSelectable: true, style: { cursor: 'text' } }
                ] }
              ]
            }
          ]
        }
    ]});
};