'use strict';
var path = require('path');
var express = require('express');
var app = express();
// Hello world
//var porth = process.env.PORT || 1337;
//var http = require('http');
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(porth);

var staticPath = path.join(__dirname, '/');
app.use(express.static(staticPath));
// Routes
app.get('/hello/', function (req, res) {
    res.send('Hello World');
});

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3000);

var lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.html')
});

var server = app.listen(app.get('port'), function () {
    lineReader.on('line', function (line) {
        console.log('Line from file:', line);
    });
    console.log('Alka: listening on port=' + app.get('port'));
});





