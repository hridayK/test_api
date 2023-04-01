var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

var port = 9000;

app.post('/sample', function(req, res) {
    console.log('receiving data ...');
    res.send(req.body);
    console.log(`Your name is ${req.body.name}`)
});

app.listen(port);
console.log('Server started! at http://localhost:' + port);