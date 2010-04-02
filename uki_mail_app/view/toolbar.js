include('../view.js');

uki.view.declare('uki_mail_app.view.Toolbar', uki.view.HFlow, function(Base) {
    var Rect = uki.geometry.Rect;
    
    this.initWidths = function() {
        var minWidth = 0;
        for (var i=0, childViews = this.childViews(); i < childViews.length; i++) {
            minWidth += childViews[i].minSize().width || childViews[i].rect().width;
            if (uki.attr(childViews[i], 'spacer')) this._spacer = childViews[i];
        }
        this._minSize = new uki.geometry.Size( minWidth, this.minSize.height );
    };
    
    this.algorithm = function(name) {
        this._resizeChildViews = this['_algorithm' + name];
    };
    
    this._resizeChildViews = this._algorithmResizeSpacer = function() {
        if (this._contentChanged) this.initWidths();
        // expected rect
        var diff = this.rect().width - this.minSize().width;
        this._spacer.width(this._spacer.minSize().width + diff);
        Base._resizeChildViews.call(this);
        this._rect.width = this.childViews()[ this.childViews().length - 1].maxX();
    };
    
    this._algorithmResizeLast = function() {
        var lastChild = this.childViews()[this.childViews().length - 1 ];
        
        if (this._contentChanged) {
            lastChild.resizeToContents('width');
            this.initWidths();
        }
        // expected rect
        var prefferedWidth = uki.attr(this._spacer, 'prefferedWidth')*1,
            minWidth = this._spacer.minSize().width,
            flex = prefferedWidth - minWidth,
            diff = this.rect().width - this.minSize().width - flex;
        if (diff < 0) {
            this._spacer.width(prefferedWidth + diff);
            lastChild.width(lastChild.minSize().width);
        } else {
            this._spacer.width(prefferedWidth);
            lastChild.width(lastChild.minSize().width + diff);
        }
        Base._resizeChildViews.call(this);
        this._rect.width = lastChild.maxX();
    };
    
});