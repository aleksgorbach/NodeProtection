var Express = require('express');
var app = new Express();

app.get('/', function (req, res) {
    res.render('./../client/wwwroot/index.ejs', {});
}).listen(7777);
