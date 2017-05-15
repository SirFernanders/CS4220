const figlet = require('figlet');

figlet.text('Hello', {
    font:'Doh',
    horizontalLayout: 'default',
    vericalLayout:'default'
}, function (err, data) {

    console.log(data);

    });