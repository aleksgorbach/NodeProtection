var Express = require('express');
var app = new Express();
var path = require('path');

app
    .get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/../client/wwwroot/index.html'));
    })
    .use(Express.static('client/wwwroot'))
    .listen(7777);
