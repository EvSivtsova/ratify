const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// sets the session
const session = require('cookie-session');
const methodOverride = require('method-override');
const ScraperApi = require('./controllers/scraperController');
const scraper = new ScraperApi()

//add routes
const usersRouter = require("./routes/users");

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

app.get('/events',  (req,res) =>{
  //how to clear between calls
  scraper.ratEventsScraper().then(()=>{
    res.json(scraper.eventList)
  })
})

app.get('/foodSafety', (req,res) => {

  let value = req.query.text
  value = value.charAt(0).toUpperCase() + value.slice(1);
  //For this feature we need data from the react sreen 'Food' and use that as 
  //data to use in the scraper. Using 'Apple' as placeholder
    console.log('value is', value)

    scraper.ratFoodScraper(value).then(()=> {
      res.json(scraper.matchedFoods)
    })
})
// route setup
console.log("I'm in server.js. Looking for a route");
app.use("/users", usersRouter);

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
