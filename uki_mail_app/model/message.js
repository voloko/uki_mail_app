include('../model.js');

uki_mail_app.model.Message = uki.newClass(uki.data.Model, function(Base) {

   uki.data.model.addFields(this, ['id', 'subject', 'from', 'to', 'cc', 'recieved', 'body', 'unread', 'flagged', 'attachments']);
   
   this.loadBody = uki.data.model.newLoader('body', { url: '/messages/body/?callback=?', ajaxOptions: { dataType: 'jsonp' } });
   
});