const express = require('express');
var app = express();
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var cors = require('cors');

// Configuration for method-override 
app.use(methodOverride('X-HTTP-Method'));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('X-Method-Override'));
app.use(methodOverride('_method'));

// Configuration for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CORS
app.use(cors());

// ignore favicon
app.use(function (request, response, next) {
    if (request.url === '/favicon.ico') {
        response.writeHead(200, { 'Content-Type': 'image/x-icon' });
    } else {
        next();
    }
});

// router
app.use('/', require('./routes'));

// Error handling
app.use(function (request, response, next) {
    var err = new Error('Not found');
    err.status = 404;
    next(err);
});
app.use(function (err, request, response, next) {
    console.log(err.stack);
    response.status(err.status || 500).json({ err: err.message });
});

// server listener
module.exports = app;