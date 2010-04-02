include('../folders.js');
include('../../../frameworks/uki/uki-more/more/view/treeList/render.js');

uki_mail_app.view.folders.Render = uki.newClass(uki.more.view.treeList.Render, function(Base) {
    this._parentTemplate = new uki.theme.Template(
        '<div class="${classPrefix}-row ${classPrefix}-${opened}" style="margin-left:${indent}px;background:url(${icon}) no-repeat 0 50%;">' + 
            '<div class="${classPrefix}-toggle"><i class="toggle-tree"></i></div>${text}' +
        '</div>'
    );

    this._leafTemplate = new uki.theme.Template(
        '<div class="${classPrefix}-row" style="margin-left:${indent}px;background:url(${icon}) no-repeat 0 50%;">${text}</div>'
    );
    
    this.initStyles = function() {
        this.classPrefix = 'treeList-' + uki.guid++;
        var style = new uki.theme.Template(
            '.${classPrefix}-row { color: #333; position:relative; padding:4px 3px 3px 22px; white-space: nowrap } ' +
            '.${classPrefix}-toggle { overflow: hidden; position:absolute; left:-14px; top:5px; width: 10px; height:9px; } ' +
            '.${classPrefix}-toggle i { display: block; position:absolute; left: 0; top: 0; width:20px; height:18px; background: url(${imageSrc});} ' +
            '.${classPrefix}-selected-blured .${classPrefix}-row { color: #FFF; } ' +
            '.${classPrefix}-selected-blured i { left: -10px; } ' +
            '.${classPrefix}-selected-blured { background: url(${bgSrc}); } ' +
            '.${classPrefix}-opened i { top: -9px; }'
        ).render({ 
            classPrefix: this.classPrefix, 
            imageSrc: uki.theme.imageSrc('arrows'),
            bgSrc: uki.theme.imageSrc('tree-selected-bg')
        });
        uki.dom.createStylesheet(style);
    };
    
    this.render = function(row, rect, i) {
        this.classPrefix || this.initStyles();
        var text = row.data;
        if (row.children && row.children.length) {
            return this._parentTemplate.render({ 
                text: text, 
                indent: row.__indent*18 + 35,
                classPrefix: this.classPrefix,
                icon: uki.theme.imageSrc(row.icon),
                opened: row.__opened ? 'opened' : ''
            });
        } else {
            return this._leafTemplate.render({ 
                text: text, 
                indent: row.__indent*18 + 20 + (row.leaf ? 0 : 15),
                icon: uki.theme.imageSrc(row.icon),
                classPrefix: this.classPrefix
            });
        }
    };
    
});