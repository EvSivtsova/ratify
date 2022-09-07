const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// sets the session
const session = require('cookie-session');
const methodOverride = require('method-override');
const ScraperApi = require('./controllers/scraperController');
const ratScraper = new ScraperApi()
const Guinea = require('./controllers/guineaPigAPIController');
const guineaScraper = new Guinea()

//add routes
const usersRouter = require("./routes/users");
const animalsRouter = require("./routes/animals");
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(
  session({
    key: 'user_sid',
    secret: 'super_secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000
    }
  })
);

// clear the cookies after user logs out
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});

// middleware function to check for logged-in users
const sessionChecker = (req, res, next) => {
  if (!req.session.user && !req.cookies.user_sid) {
    res.redirect('/sessions/new');
  } else {
    next();
  }
};

app.get('/test',  (req,res) =>{
  res.json('congrats')
})

app.post("/login", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  console.log("username: ", username);
  console.log("password: ", password);

  let MongoClient = require('mongodb').MongoClient
  // refactor the server ip
  MongoClient.connect("mongodb://0.0.0.0/ratify", function(err, client) {
    if (err) {
      console.log("mongodb error: ", error);
    }

    console.log(client);
    console.log(client.db);
    let collection = client.db("ratify").collection('users');
    collection.findOne({"email": username, "password": password}, function(err, item) {
      // if OK, user exists, if KO user does not exist
      console.log(err);
      console.log(item);
      if (item == null) {
        res.send(500);
      }
      else {
        res.send(200);
      }
    });
  });

  // if ((username == "delly@email.com") && (password == "123456")) {
  //   res.send("OK");
  // }
  // else {
  //   res.status(500)
  //   res.send('KO')
  // }
})


app.get('/events',  (req,res) =>{
  //how to clear between calls
  scraper.ratEventsScraper().then(()=>{
    res.json(scraper.eventList)
  })
})

app.get('/RatfoodSafety', (req,res) => {
  let value = req.query.text
  value = value.charAt(0).toUpperCase() + value.slice(1);
    ratScraper.ratFoodScraper(value).then(()=> {
      res.json(ratScraper.matchedFoods)
    })
})
app.get('/GuineafoodSafety', (req,res) => {
  let value = req.query.text
  value = value.charAt(0).toUpperCase() + value.slice(1);
    guineaScraper.guineaScraper(value).then(()=> {
      res.json(guineaScraper.matchedFoods)
    })
})
// route setup

app.use("/users", usersRouter);
app.use("/animals", animalsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
