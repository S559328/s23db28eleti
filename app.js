var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var housesRouter = require('./routes/houses');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var houses = require("./models/houses");
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/houses', housesRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);
async function recreateDB() {
  await houses.deleteMany();
  let instance1 = new houses({houses_color:"Brown",houses_length:"800",houses_cost:"$200000"});

  instance1.save().then(() => {
    console.log('Everything went well');
  }).catch((e) => {
    console.log('There was an error', e.message);
  });
  let instance2 = new houses({houses_color:"yellow",houses_length:"1000",houses_cost:"$250000" });
  instance2.save().then(() => {
    console.log('Everything went well');
  }).catch((e) => {
    console.log('There was an error', e.message);
  });
  let instance3 = new houses({ houses_color:"gray",houses_length:"600",houses_cost:"$10000"});
  instance3.save().then(() => {
    console.log('Everything went well');
  }).catch((e) => {
    console.log('There was an error', e.message);
  });
  
  let instance4 = new houses({ houses_color:"Black",houses_length:"900",houses_cost:"$2000"});
  instance4.save().then(() => {
    console.log('Everything went well');
  }).catch((e) => {
    console.log('There was an error', e.message);
  });
}

let reseed = true;
if (reseed) { recreateDB();}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
