'use strict';

var env = process.env;

// set up ========================
var express  = require('express');
var path      = require('path');
var app      = express();                               // create our app w/ express
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var http = require('http');

// configuration =================
var PORT = env.PORT || 80;

app.use(express.static(path.join(__dirname, 'dist')));               // set the static files location /public/img will be /img for users
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.use('/', require('./routes/index'));

var server = http.createServer(app);

server.listen(PORT, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("Server listening at http://%s:%s", host, port)
});
