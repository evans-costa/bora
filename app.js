const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');

const indexRouter = require('./routes/rotaIndex');
const eventosRouter = require('./routes/rotaEventos');
const usersRouter = require('./routes/rotaUsers');
const adminRouter = require('./routes/rotasAdmin');
const pagamentoRouter = require('./routes/rotaPagamento');
const faleConoscoRouter = require('./routes/rotaFaleConosco');
const loginRouter = require('./routes/rotaLogin');
const funcionariosRouter = require('./routes/rotaFuncionarios');
const quemSomosRouter = require('./routes/quemSomosRoute');
const carrinhoRouter = require('./routes/rotaCarrinho');

const userDataMiddleware = require('./middlewares/userDataMiddleware');
const carrinhoDataMiddleware = require('./middlewares/carrinhoDataMiddleware');

const app = express();

app.use(
  session({
    secret: 'senhasecreta',
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cookieParser());

app.use(userDataMiddleware);
app.use(carrinhoDataMiddleware);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use('/', indexRouter);
app.use('/eventos', eventosRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);
app.use('/funcionarios', funcionariosRouter);
app.use('/login', loginRouter);
app.use('/pagamento', pagamentoRouter);
app.use('/faleconosco', faleConoscoRouter);
app.use('/quemsomos', quemSomosRouter);
app.use('/carrinho', carrinhoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
