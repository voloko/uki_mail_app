include('../model.js');

uki_mail_app.model.Message = uki.newClass(uki.data.Model, function(Base) {

   uki.data.model.addFields(this, ['id', 'subject', 'from', 'to', 'cc', 'recieved', 'body', 'unread', 'flagged', 'attachments', 'mailbox']);
   
   this.loadBody = uki.data.model.newLoader('body', { 
       url: function() { return 'message/' + this.id() + '/body/?callback=?'; }, 
       ajaxOptions: { dataType: 'jsonp' } 
   });
   
   this.markAsRead = function(callback) {
       uki.ajax({
           url: 'message/' + this.id() + '/markAsRead/',
           type: 'POST',
           success: uki.proxy(function() {
               this.unread(false);
               callback && callback.call(this);
           }, this)
       });
   };
   
   this.fromName = function() {
       return this.from().replace(/<[^>]+>/g, '').replace(/\s+/, ' ');
   };
   
   this.toName = function() {
       return this.to().replace(/<[^>]+>/g, '').replace(/\s+/, ' ');
   };
   
   this.summary = function() {
       return this.subject() + ' from ' + this.from();
   };
   
});

uki_mail_app.model.Message.fetch = function(id, callback) {
    uki.ajax({
        url: 'message/' + id + '/?callback=?',
        dataType: 'jsonp',
        success: function(data) {
            callback(new uki_mail_app.model.Message(data));
        }
    })
};