require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/routes/index');
var apiRouter = require('./src/routes/api');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.listen(Number(process.env.API_PORT), function () {
    console.log('Servidor ligado: http://'+process.env.API_HOST+':'+process.env.API_PORT+' !');
});

module.exports = app;
