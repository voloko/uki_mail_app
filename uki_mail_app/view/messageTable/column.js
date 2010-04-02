include('../messageTable.js');

uki.view.declare('uki_mail_app.view.messageTable.Column', uki.view.table.Column, function(Base) {
    this._inset = new uki.geometry.Inset(1, 3);
});