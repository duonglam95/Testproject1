var express = require('express');
var app = express();
app.get('/contact', function (req, res){
	res.send('hello world');
});
app.listen(3000, function () {
	console.log('Example app');
});