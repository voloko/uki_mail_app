include('../controller.js');

uki_mail_app.controller.editor = function(action, messages) {
    var context = uki_mail_app.layout.editor();

    context.attachTo(window, '1000 1000');
    
    uki('[field=subject]', context).bind('keyup blur click change', function() {
        document.title = this.value() || '(No Subject)';
    });
    
    uki('ToolbarButton[label=Send]', context).click(function() {
        alert('Demo server does not support sending messages.')
    }); 
    
    function splitIntoLines (text, prefix) {
        var result = '',
            lines = text.replace(/<br\s?\/>/g, '\n').split(/\r?\n/);

        for (var i=0; i < lines.length; i++) {
            var line = lines[i];
            while (line.length > 80) {
                var p = line.substr(0, 80).lastIndexOf(' ');
                result += prefix + line.substr(0, p == -1 ? 80 : p) + '\n';
                line = line.substr(p == -1 ? 80 : p+1);
            }
            result += prefix + line + '\n';
        };
        return result;
    }
    
    function focus (t) {
        t.focus();
        try {
            r = t.createTextRange();
            r.collapse();
            r.select()
        } catch(e) {}
        try {
            t.selectionStart = t.selectionEnd = 0;
        } catch(e) {}
    }
    
    function loadAllMessageBodies (ids, callback, bodies) {
        bodies = bodies || [];
        if (ids.length > 0) {
            uki_mail_app.model.Message.fetch(ids.shift(), function(message) {
                message.loadBody(function(body) {
                    bodies.push(body);
                    loadAllMessageBodies(ids, callback, bodies);
                })
            });
        } else {
            callback(bodies);
        }
    }
    
    // a bit hackish but it's faster then build custom view
    var textarea = uki('#content', context)[0]._label.firstChild;
    var actions = {
        'reply': function() {
            uki_mail_app.model.Message.fetch(messages[0], function(message) {
                uki('[field=to]', context).value(message.from());
                uki('[field=subject]', context).value('Re: ' + message.subject()).trigger('change');
                message.loadBody(function(body) {
                    textarea.value = 
                        '\nOn ' + new Date() + ' ' + message.fromName() + ' wrote: \n\n' +
                        splitIntoLines(body, '> ');
                    focus(textarea);
                })
            });
        },
        'forward': function() {
            uki_mail_app.model.Message.fetch(messages[0], function(message) {
                if (messages.length == 1) {
                    uki('[field=subject]', context).value('Fwd: ' + message.subject()).trigger('change');
                }
                loadAllMessageBodies(messages, function(bodies) {
                    for (var i=0; i < bodies.length; i++) {
                        textarea.value += 
                            '\nBegin forwarded message:\n\n' +
                            splitIntoLines(bodies[i], '>');
                    };
                })
                uki('[field=to]', context).focus();
            });
        },
        'redirect': function() {
            uki_mail_app.model.Message.fetch(messages[0], function(message) {
                uki('[field=subject]', context).value(message.subject()).trigger('change');
                message.loadBody(function(body) {
                    textarea.value = 
                        splitIntoLines(body, '');
                });
                uki('[field=to]', context).focus();
            });
        },
        'new-message': function() {
            document.title = 'New Message';
        }
    };
    actions['reply-all'] = actions['reply'];
        
    if (actions[action]) actions[action]();
    
}