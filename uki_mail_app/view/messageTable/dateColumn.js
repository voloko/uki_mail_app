include('column.js');

uki.view.declare('uki_mail_app.view.messageTable.DateColumn', uki_mail_app.view.messageTable.Column, function(Base) {
    
    this.table = uki.newProp('_table');
    
    this.width = function(v) {
        if (v === undefined) return Base.width.call(this);
        Base.width.call(this, v);
        this._updateColumnFormatting();
        return this;
    };

    this._updateColumnFormatting = function(position) {
        var formatter;
        var w = this.width();
        if (w > 190) {
            formatter = dateFormatterLongest;
        } else if (w > 150){
            formatter = dateFormatterLong;
        } else if (w > 130){
            formatter = dateFormatterMid;
        } else if (w > 100){
            formatter = dateFormatterShort;
        } else {
            formatter = dateFormatterShortest;
        }
        if (this.formatter() != formatter) {
            this.formatter(formatter);
            if (this.table()) {
                this.table().redrawColumn( uki.inArray(this, this.table().columns()) );
            }
        }
    };
    
    
    var mNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        mShortNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        
    function formatTime (d) {
        return (d.getHours() % 12) + ':' + add0(d.getMinutes()) + ' ' + (d.getHours() > 12 ? 'PM' : 'AM');
    }
    
    function formatDateLongest (d) {
        return mNames[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear();
    }
    
    function formatDateLong (d) {
        return mShortNames[d.getMonth()] +  ' ' + d.getDate() + ', ' + d.getFullYear();
    }
    
    function formatYear (y) {
        if (y > 1900) y -= 1900;
        if (y > 100) y -= 100;
        return add0(y);
    }
    
    function add0 (x) {
        return x < 10 ? '0' + x : x;
    }
    
    function formatDateShort (d) {
        return add0(d.getMonth() + 1) + '/' + add0(d.getDate()) + '/' + formatYear(d.getYear());
    }
    
    function dateFormatterLongest (v) {
        var d = new Date();
        d.setTime(v * 1000);
        return '<div style="float:right;">' + formatTime(d) + '</div>' + formatDateLongest(d);
    }
    
    function dateFormatterLong (v) {
        var d = new Date();
        d.setTime(v * 1000);
        return '<div style="float:right;">' + formatTime(d) + '</div>' + formatDateLong(d);
    }
    
    function dateFormatterMid (v) {
        var d = new Date();
        d.setTime(v * 1000);
        return '<div style="float:right;">' + formatTime(d) + '</div>' + formatDateShort(d);
    }
    
    function dateFormatterShort (v) {
        var d = new Date();
        d.setTime(v * 1000);
        return formatDateLong(d);
    }
    
    function dateFormatterShortest (v) {
        var d = new Date();
        d.setTime(v * 1000);
        return formatDateShort(d);
    }
});