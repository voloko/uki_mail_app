include('../view.js');

uki.view.declare('uki_mail_app.view.ToolbarButton', uki.view.Container, function(Base) {
    
    uki.each(['html', 'backgroundPrefix', 'inset'], function(i, name) {
        uki.delegateProp(this, name, '_button');
    }, this)
    
    this.label = function(html) {
        if (html === undefined) return this._label.html();
        this._label.html(html).resizeToContents('width').layout();
        return this;
    };
    
    this.icon = uki.newProp('_icon', function(icon) {
        this._icon = icon;
        var image = uki.createElement('img', 'position:absolute;top:1px');
        image.ondragstart = function() {return false};
        image.src = icon;
        uki.image.load([image], uki.proxy(function() {
            image.style.left = (this.rect().width - image.width)/2 + 'px';
            this._button._label.appendChild(image);
        }, this))
    });
    
    this.disabled = function(value) {
        if (value === undefined) return this._button.disabled();
        this._button.disabled(value);
        this._label.style('color', value ? '#666' : '#000');
        this._button._label.style.opacity = value ? '0.5' : '';
        return this;
    };
    
    this._createDom = function() {
        Base._createDom.call(this);
        var rect = this.rect();
        this._button = uki({ view: 'Button', rect: rect.clone().normalize(), anchors: 'left top right bottom', inset: '0', focusable: false })[0];
        this._label = uki({ view: 'Label', rect: new uki.geometry.Rect(rect.width/2, rect.height+2,0,11), anchors: 'bottom', 
            style: { fontSize: '11px', textShadow: '0 1px 0px rgba(255,255,255,0.5)', fontFamily: 'Lucida Grande,Arial,Helvetica,sans-serif' } })[0];
        this.appendChild(this._button);
        this.appendChild(this._label);
        
        this._label.bind('mousedown', uki.proxy(this._passEvent, this));
        this._label.bind('mouseleave', uki.proxy(this._passEvent, this));
        this._label.bind('click', uki.proxy(this._passEvent, this));
        this._button._updateBg = uki.proxy(this._updateBg, this);
    }; 
    
    this._passEvent = function(e) {
        this._button.trigger(e.type, e);
    };
    
    this._updateBg = function() {
        uki.view.Button.prototype._updateBg.call(this._button);
        this.style('zIndex', this._button._down || this._button._over ? 200 : 100);
    };
    
   
});