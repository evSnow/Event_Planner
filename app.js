var express = require('express');
var path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Account= require('./db/account');
const Event=require('./db/event');
const session = require('express-session');
var cookieSession = require('cookie-session');
var cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo');
var indexRouter = require('./routes/index');

var usersRouter = require('./routes/users');
var accountRouter = require('./routes/account_creat');
var bookRouter= require('./routes/book');
var loginRouter= require('./routes/login');
var logoutRouter= require('./routes/logout');
var event_editRouter= require('./routes/event_edit');

var app = express();
app.use(cookieParser())
const dbUrl = "mongodb://0.0.0.0:27017/accounts"

   mongoose.connect(dbUrl)
  .then((result) => console.log('connected to db'))
  .catch((err)=>console.log(err));


  app.use(session({
    secret: "secret word",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: dbUrl, }),
  }));




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

async function getAccountUsername(one) {
  try {
    const found = await Account.find({username: one});
    //console.log(found);
    return found;
  } catch (err) {
    console.error(err);
  }
  while (found.hasNext()) {
    
  }
  return null;
}

app.post("/create", (req,res) => {
  //console.log(req.body);
  const account= new Account(req.body);
  var userAccount=account.username;
  var loginAccount= getAccountUsername(userAccount);
  loginAccount.then(function(data){
  //var temp=username;
  //const temp= new Account(data);

  var temp=data[0];
  console.log(temp);
  console.log(account);
  if(temp.username===account.username){ 
    res.render('account_creat', {isError: "Invalid account arlady exist"});
  }
  else { 
  account.save()
  .then((result) => {
    res.redirect('/');
  })

  
}
})
})


//  .then((result) => console.log('connected to db'))
//.catch((err)=>console.log(err));



app.post("/loginNow", (req,res) => {
  try{
  //console.log(req.body);
  const account= new Account(req.body);
  var anna= account.username;
  //console.log(anna);
  var loginAccount= getAccountUsername(anna);
    //console.log(loginAccount);
  loginAccount.then(function(anna){
    //console.log(loginAccount);
    req.session.user ={id: loginAccount.id, username: loginAccount.username, email: loginAccount.email };
    res.redirect('/')
    //console.log(session);
  })
  }
  catch (err) {
    console.error(err);
  }
  

  /*)
  var found= Account.findOne({'username': anna});
  found.select('username password');
  var founds= found.exec();
  console.log('%s',founds.password);
  */
  /*  
    , function(req,res){
    if(err){
      console.log("hi");
    }
    else{
      console.log("dog")
    }
  })
*/
})


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