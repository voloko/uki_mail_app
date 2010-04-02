include('../view.js');

uki.view.declare('uki_mail_app.view.SearchField', uki.view.Container, function(Base) {
    
    uki.each(['html', 'backgroundPrefix', 'inset'], function(i, name) {
        uki.delegateProp(this, name, '_input');
    }, this);
    
    this.label = function(html) {
        if (html === undefined) return this._label.innerHTML;
        this._label.html(html).resizeToContents('width').layout();
        return this;
    };
    
    this.disabled = function(value) {
        if (value === undefined) return this._button.disabled();
        this._input.disabled(value);
        this._label.style('color', value ? '#666' : '#000')
        return this;
    };
    
    
    this._createDom = function() {
        Base._createDom.call(this);
        var rect = this.rect();
        this._input = uki({ view: 'TextField', rect: rect.clone().normalize(), anchors: 'left top right bottom' })[0];
        this._label = uki({ view: 'Label', rect: new uki.geometry.Rect((rect.width-10)/2, rect.height+2,0,11), anchors: 'bottom', 
        style: { fontSize: '11px', textShadow: '0 1px 0px rgba(255,255,255,0.5)', fontFamily: 'Lucida Grande,Arial,Helvetica,sans-serif' } })[0];
        this.appendChild(this._input);
        this.appendChild(this._label);
    }; 
   
});