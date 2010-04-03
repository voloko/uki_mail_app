include('../folders.js');
include('../../../frameworks/uki/uki-more/more/view/treeList/render.js');

uki_mail_app.view.folders.Render = uki.newClass(uki.more.view.treeList.Render, function(Base) {
    this._parentTemplate = new uki.theme.Template(
        '<div class="${classPrefix}-row ${classPrefix}-${opened}" style="margin-left:${indent}px;background:url(${icon}) no-repeat 0 50%;">' + 
            '<div class="${classPrefix}-toggle"><i class="toggle-tree"></i></div>${text}' +
        '</div>'
    );

    this._leafTemplate = new uki.theme.Template(
            '<div class="${classPrefix}-row" style="margin-left:${indent}px;background:url(${icon}) no-repeat 0 1px; padding-right: ${unreadPadding}px">' +
                '${text}<div class="${classPrefix}-unread" style="display:${unreadDisplay}">${unread}</div></td>' +
            '</div>'
    );
    
    this.initStyles = function() {
        this.classPrefix = 'treeList-' + uki.guid++;
        var style = new uki.theme.Template(
            // '.${classPrefix}-table, .${classPrefix}-table td { border-collapse: collapse; padding: 0; width: 100%; } ' +
            '.${classPrefix}-unread { position: absolute; padding: 2px 4px; min-width: 14px; text-align: center; right: 5px; top: 3px; color: #FFF; background: #94A7C8; -webkit-border-radius: 10px; -moz-border-radius: 10px; border-radius: 10px; line-height: 10px; font-size: 10px; font-weight: bold;  } ' +
            '.${classPrefix}-row { color: #000; position:relative; padding:4px 3px 3px 22px; white-space: nowrap; text-overflow: ellipsis; } ' +
            '.${classPrefix}-toggle { overflow: hidden; position:absolute; left:-14px; top:5px; width: 10px; height:9px; } ' +
            '.${classPrefix}-toggle i { display: block; position:absolute; left: 0; top: 0; width:20px; height:18px; background: url(${imageSrc});} ' +
            '.${classPrefix}-selected-blured .${classPrefix}-row { color: #FFF; } ' +
            '.${classPrefix}-selected-blured i { left: -10px; } ' +
            '.${classPrefix}-selected-blured { background: url(${bgSrc}); } ' +
            '.${classPrefix}-selected-blured .${classPrefix}-unread { background: #FFF; color: #94A7C8 } ' +
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
        var text = row.title(),
            children = uki.attr(row, 'children');
        var options = {
            text: row.title(), 
            unread: row.unread(),
            unreadDisplay: row.unread() ? 'block' : 'none',
            unreadPadding: row.unread() > 100 ? '40' : row.unread() > 0 ? '30' : 0,
            icon: uki.theme.imageSrc(row.icon()),
            classPrefix: this.classPrefix
        };
        
        if (children && children.length) {
            options.indent = row.__indent*18 + 35;
            options.opened = row.__opened ? 'opened' : '';
            return this._parentTemplate.render(options);
        } else {
            options.indent = row.__indent*18 + 20 + (row.leaf ? 0 : 15);
            return this._leafTemplate.render(options);
        }
    };
    
});