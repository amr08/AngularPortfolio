var gzippo = require('gzippo');
var dotenv = require("dotenv").config();
var express = require('express');
var morgan = require('morgan');
var app = express();


app.use(morgan('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 9000);