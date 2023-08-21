var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');

var app = express();



require ('dotenv') .config ();
var pool = require ( './models/db');
pool.query ('select * from usuarios').then (function (resultados){
  console.log (resultados)
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter);

app.get('/admin/login', (req, res) => {
  res.send('Esto es admin');
});

app.get('/Home', function (req, res) {
  res.send('Hola soy la pagina Home');
});

app.get('/transacciones', function (req, res) {
  res.send('Hola soy la pagina de transacciones');
});

app.get('/contactos', function (req, res) {
  res.send('Hola soy la pagina de contactos');
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.ejs');
});

module.exports = app;