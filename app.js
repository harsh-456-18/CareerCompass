const express = require('express');
const path = require('path');
const app = express();

const indexRouter = require('./app_server/routes/index');

// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

// static files
app.use(express.static(path.join(__dirname, 'public')));

// use routes
app.use('/', indexRouter);  // ✅ this connects your routes

module.exports = app;
