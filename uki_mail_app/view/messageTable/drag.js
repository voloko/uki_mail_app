include('../messageTable.js');

uki.view.declare('uki_mail_app.view.messageTable.Drag', uki.view.Container, function(Base) {
    
    this._createDom = function() {
        Base._createDom.call(this);
        uki([
            { view: 'Image', rect: '32 32', anchors: 'left top', src: uki.theme.imageSrc('dragging') },
            { view: 'Label', rect: '24 16 26 26', anchors: 'left top', 
                background: 'url(' + uki.theme.imageSrc('dragging1-2') + ')', text: '1',
                style: { textAlign: 'center', color: '#FFF', fontSize: '11px', fontFamily: uki.theme.style('fontFamily') }
            }
        ]).appendTo(this);
    }; 
    
    this.count = uki.newProp('_count', function(v) {
        this._count = v;
        uki('Label', this)[0]
            .text(v)
            .background('url(' + uki.theme.imageSrc(v < 100 ? 'dragging1-2' : 'dragging3') + ')')
            .width(v < 100 ? 26 : 36)
            .layout();
    })
});