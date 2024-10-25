var express = require('express');
var path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Account= require('./db/account');
const Event=require('./db/event');
const Session = require('express-session');
const MongoStore = require('connect-mongo');
var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');
var accountRouter = require('./routes/account_creat');
var bookRouter= require('./routes/book');
var loginRouter= require('./routes/login');
var logoutRouter= require('./routes/logout');
var event_editRouter= require('./routes/event_edit');

var app = express();

const dbUrl = "mongodb://0.0.0.0:27017/accounts"

   mongoose.connect(dbUrl)
  .then((result) => console.log('connected to db'))
  .catch((err)=>console.log(err));

/* Not finish yet will finish soon 
  app.use(session({
    secret: "secret word",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ MongoUrl: dbUrl, }),
  }));
*/



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(express.json());

//app.use('/', indexRouter);
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

app.use('/account_creat', accountRouter, );
app.use('/book', bookRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/event_edit', event_editRouter);


app.post("/create", (req,res) => {
  console.log(req.body);
  const account= new Account(req.body);

  account.save()
  .then((result) => {
    res.redirect('/');
  })
})
/*  not fully working yet will finish later
app.post("/loginNow", (req,res) => {
  const account= new Account(req.body);
  console.log(req.body);
   Account.find({username:account.username}, function(req,res){
    if(err){
      console.log("hi");
    }
    else{
      console.log("dog")
    }
  })

})
*/

app.post("/books", (req,res) => {
  console.log(req.body);
  const event= new Event(req.body);
  event.save()
  .then((result) => {
    res.redirect('/');
  })
})

//app.get('/', (req, res) => {
//  res.render('/books')
//});
app.get("/", ( req, res) =>{
  Event.find()
  .then((result) =>{
    console.log(1);

      res.render('index', { Event:result});
    })
    .catch((err)=> {
      console.log(err)
    })
})

  app.listen(3000);
module.exports = app;