var express = require('express');
var path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Account= require('./db/account');

var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');


var accountRouter = require('./routes/account_creat');

var bookRouter= require('./routes/book');

var app = express();

const dbUrl = "mongodb://localhost:27017/accounts"

   mongoose.connect(dbUrl)
  .then((result) => console.log('connected to db'))
  .catch((err)=>console.log(err));

  app.use('/adAccount', (req, res) => {
    console.log("54");
    const account = new Account({  
    email:'sd',
    username:'sd',
    password: 'sdf'
  });
  account.save()
    .then((result) => {
      res.send(result);
      console.log(5);
    })
    .catch((err) =>{
      console.log(err);
    })
  });


  


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use(express.json());

app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
console.log("9");
app.use('/account_creat', accountRouter);
app.use('/book', bookRouter);
app.use('/users', usersRouter);


app.post("/create", (req,res) => {
  console.log(req.body);
  const account= new Account(req.body);

  account.save()
  .then((result) => {
    res.redirect('/');
  })
})


  app.listen(3000);
module.exports = app;