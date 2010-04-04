include('../layout.js');

uki_mail_app.layout.editor = function() {
    var context = uki({ view: 'Box', rect: '1000 1000', anchors: 'left top right bottom',
        childViews: [
        { view: 'Box', rect: '0 -20 1000 68', anchors: 'left top right', id: 'top',
          background: 'theme(panel-dark)', childViews: [
              { view: 'uki_mail_app.view.ToolbarButton', rect: '10 25 46 23', label: 'Send', anchors: 'left top', backgroundPrefix: 'toolbar-button-full-',
                  icon: uki.theme.imageSrc('toolbar-send') },
                  
              { view: 'uki_mail_app.view.ToolbarButton', rect: '70 25 41 23', label: 'Attach', anchors: 'left top', backgroundPrefix: 'toolbar-button-full-',
                  icon: uki.theme.imageSrc('toolbar-attach'), disabled: true },
                  
              { view: 'uki_mail_app.view.ToolbarButton', rect: '120 25 41 23', label: 'Address', anchors: 'left top', backgroundPrefix: 'toolbar-button-full-',
                  icon: uki.theme.imageSrc('toolbar-address'), disabled: true },
                  
              { view: 'uki_mail_app.view.ToolbarButton', rect: '170 25 41 23', label: 'Fonts', anchors: 'left top', backgroundPrefix: 'toolbar-button-full-',
                  icon: uki.theme.imageSrc('toolbar-fonts'), disabled: true },
                  
              { view: 'uki_mail_app.view.ToolbarButton', rect: '220 25 41 23', label: 'Colors', anchors: 'left top', backgroundPrefix: 'toolbar-button-full-',
                  icon: uki.theme.imageSrc('toolbar-colors'), disabled: true },
                  
              { view: 'uki_mail_app.view.ToolbarButton', rect: '290 25 41 23', label: 'Save As Draft', anchors: 'left top', backgroundPrefix: 'toolbar-button-full-',
                  icon: uki.theme.imageSrc('toolbar-save-as-draft'), disabled: true }
          
          ]
        },
        
        { view: 'Box', rect: '0 48 1000 94', anchors: 'left top right', background: 'cssBox(background: #EDEDED; border-bottom: 1px solid #666)', childViews: [
            { view: 'Label', rect: '0 6 105 22', anchors: 'left top', text: 'To:', background: 'theme(editor-field)' },
            { view: 'TextField', rect: '110 6 875 22', anchors: 'left top right', field: 'to', style: { fontSize: '12px' } },
            { view: 'Label', rect: '0 34 105 22', anchors: 'left top', text: 'Cc:', background: 'theme(editor-field)' },
            { view: 'TextField', rect: '110 34 875 22', anchors: 'left top right', field: 'cc', style: { fontSize: '12px' } },
            { view: 'Label', rect: '0 62 105 22', anchors: 'left top', text: 'Subject:', background: 'theme(editor-field)' },
            { view: 'TextField', rect: '110 62 875 22', anchors: 'left top right', field: 'subject', style: { fontSize: '12px' } }
        ] },
        
        { view: 'Label', rect: '0 142 1000 858', anchors: 'left top right bottom', inset: '0', id: 'content', textSelectable: true }
        // { view: 'MultilineTextField', rect: '0 116 1002 886', anchors: 'left top right bottom', background: 'null', style: { fontSize: '12px' } }
    ]});
    
    uki('#content', context)
        .html('<textarea style="position:absolute;z-index:100;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;margin:0;width:100%;height:100%;border:none;outline:none;font-size:12px;font-family:' + uki.theme.style('fontFamily') + '"></textarea>');
    if (/MSIE 6/.test(navigator.userAgent)) {
        uki('#content', context).bind('layout', function() {
            this._label.firstChild.style.height = this.rect().height + 'px';
        })
    }
    return context;
}