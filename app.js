var express = require('express');
var path = require('path');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var accountRouter = require('./routes/account_creat');
var bookRouter= require('./routes/book');
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.listen(3000);

app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/account_creat', accountRouter);
app.use('/book', bookRouter);
app.use('/users', usersRouter);




module.exports = app;