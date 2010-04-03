// this is a test app after all
var MY_EMAIL = 'mail@ukijs.org';
var MAILBOXES = [];
function findMailboxById (id, mboxes) {
    mboxes = mboxes || MAILBOXES;
    for (var i = mboxes.length - 1; i >= 0; i--){
        if (mboxes[i].children()) {
            var tmp = findMailboxById(id, mboxes[i]);
            if (tmp) return tmp;
        }
        if (mboxes[i].id() == id) return mboxes[i];
    };
    return false;
}
