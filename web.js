var gzippo = require('gzippo');
var express = require('express');
var morgan = require('morgan');
var PORT = process.env.PORT || 3000;
var app = express();

app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(PORT, function(){
	console.log("app running on PORT " + PORT);
});