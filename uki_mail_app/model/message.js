include('../model.js');

uki_mail_app.model.Message = uki.newClass(uki.data.Model, function(Base) {

   uki.data.model.addFields(this, ['id', 'subject', 'from', 'to', 'deliveryDate', 'body', 'unread', 'flagged']);
   
   this.loadBody = function(callback) {
       if (this.body()) {
           callback(this.body());
       } else {
           this.bind('bodyLoaded', callback);
           if (!this._loadingBody) {
               this._loadingBody = true;
               uki.ajax({
                   url: '/message',
                   data: { id: this.id() },
                   success: uki.proxy(function(body) {
                       this._body = body;
                       this.trigger('bodyLoaded', body);
                       this.unbind('bodyLoaded');
                   }, this)
               });
           }
       }
   };
   
});