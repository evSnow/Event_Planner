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
//var indexRouter = require('./routes/index');
//var calendarRouter = require('./routes/calendarRoute.js');
var usersRouter = require('./routes/users');
var accountRouter = require('./routes/account_creat');
//var bookRouter= require('./routes/book');
var loginRouter= require('./routes/login');
//var logoutRouter= require('./routes/logout');
var event_editRouter= require('./routes/event_edit');
var ticketRouter = require('./routes/ticket');
var app = express();
app.use(cookieParser());
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
//app.use('/book', bookRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
//app.use('/logout', logoutRouter);
app.use('/event_edit', event_editRouter);
app.use('/ticket', ticketRouter);

//app.use('/calendar', calendarRouter);



function getAccountUsername(one) {
  try {
    var found = Account.findOne({username: one});
    //console.log(found);
   
    return found;
  } catch (err) {
    console.error(err);
  }
  while (found.hasNext()) {
    
  }
}



function getEventName(one) {
  try {
    var found = Event.findOne({firstName: one});
    //console.log(found);
   
    return found;
  } catch (err) {
    console.error(err);
  }
  while (found.hasNext()) {
    
  }
}

app.post("/create", async function (req,res) {
  //console.log(req.body);
  const account= new Account(req.body);
  var userAccount=account.username;
  var loginAccount= await getAccountUsername(userAccount);

  //console.log(loginAccount);
  console.log(account);
  if(loginAccount==null){ 
    console.log("hi")
    account.save()
    .then((result) => {
      req.session.user ={password: account.password, username: account.username, email: account.email };
      res.redirect('/');
    }
  )
  }
  else { 
    console.log("no");
    res.render('account_creat', {isError: "Invalid account arlady exist"});

  
}
})

app.get("/pofileBooked", (req,res)=>{
  console.log(req.session.user.username);
  Account.findOne({username: req.session.user.username})
  .then((result) =>{
    //console.log(result);
  res.render('pofileBooked', { AccSession:result});
})
})


app.post("/loginNow", async function (req,res) {
  try{
  console.log(req.body);
  const account= new Account(req.body);
  var anna= account.username;
  //console.log(anna);
  var loginAccount= await getAccountUsername(anna);
    //console.log(loginAccount);
  
    console.log(loginAccount);
    if(loginAccount != null){ 
    req.session.user ={id: loginAccount.id, username: loginAccount.username, email: loginAccount.email };
    res.redirect('/')
    }
    else{
      res.redirect('/login');
    }
    //console.log(session);
  }
  catch (err) {
    console.error(err);
  }
  


})


app.post("/books", (req,res) => {
  console.log(req.body);
  const event= new Event(req.body);
  event.save()
  .then((result) => {
    res.redirect('/');
  })
})
app.post('/direct', (req,res)=>{
  //console.log(req.body);
  console.log("hello");
  console.log(req.session.user);
  //.log(req.body.name)
  
  console.log(req.body.name)
  Event.findOne({firstName: req.body.name})
  .then((result) =>{
    console.log(result);

    res.render('event_detail',  { Event:result});
    })
    .catch((err)=> {
      console.log(err)
    })
  })

  app.post('/currentBook', (req,res)=>{
    console.log("hello");

    Account.updateOne({username: req.session.user.username},{$push: {booked: req.body.name}})
    .then((result)=>{
      console.log(result);
      res.redirect('/');
    }
  )
      .catch((err)=> {
        console.log(err)
      })
    })

//app.get('/event_detail', (req, res)=>{
 

/*
app.post('/event_detail', (req,res)=> {
  Event.find()
  .then((result) =>{
})
*/
//app.get('/', (req, res) => {
//  res.render('/books')
//});
app.get("/", ( req, res) =>{
  console.log(req.session.username);
  console.log(req.session.id);

  console.log("hi");
  if(Object.keys(req.session).length ==1){ 
  Event.find()
  .then((result) =>{
    console.log(1);

      res.render('index', { Event:result, fivw:1});
    })
    .catch((err)=> {
      console.log(err)
    })
  }
  else{
    console.log(3);
    Event.find()
    .then((result) =>{  
        res.render('index1', { Event:result});
      })
      .catch((err)=> {
        console.log(err)
      })
      
  }
  })



  app.get('/calendar', function(req, res, next) {
    res.render('calendar', { title: 'calendar' });
  });
app.get('/logout', (req, res)=>{
  console.log("hi");
  req.session.destroy((err) =>{
    res.redirect('/')
  });
  
});
  app.listen(4000);
module.exports = app;
