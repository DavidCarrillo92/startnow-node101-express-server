// import files and packages up here
var express = require('express');
var logger = require('morgan');
var topSpotsData = require('./data.json');

// create your express server below
var app = express();

// add your routes and middleware below
app.use(logger('dev'));

app.get('/', function (req, res,){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("Hello World");
});

app.get('/data', function (req, res, next) {
    res.json(topSpotsData);
    next() // pass control to the next handler
});

// finally export the express application
module.exports = app;
