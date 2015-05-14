var express = require('express');
var app = express();
var public_dir = './public/';

app.get('/', function(req, res) {
	res.sendfile(public_dir + 'index.html');
});

app.get('/writing', function(req, res) {
	res.sendfile(public_dir + 'writting.html');
});

app.get('/projects', function(req, res) {
	res.sendfile(public_dir + 'work.html');
});

app.use(express.static(__dirname + '/public'));


app.listen(3000);