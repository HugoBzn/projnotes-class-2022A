//Preámbulo
// Ayuda a manejar errores HTTP
import createError from 'http-errors';
//Ayuda a crear servidores web
import express from 'express';
//Nucleo de node, ayuda al manejo de las rutas
import path from 'path';
//Ayuda al manejo de las cookies
import cookieParser from 'cookie-parser';
//Maneja el log de peticiones http
import logger from 'morgan';

// Las rutas
import indexRouter from './routes/index';
import usersRouter from './routes/users';
import aboutRouter from './routes/about';

//Aquí se crea la instancia de Express (req,res,next)=>{...}
const app = express();

//Configuración del motor de plantillas (Template engine)
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Todos los middlewares globales van primero que cualquier otro middleware de la aplicación
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// Middleware de archivos estaticos
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Registrando las rutas en la APP
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
  
  // catch 404 and forward to error handler
app.use((req,res,next)=>{
    next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//Exportando instancia de app usando JS moderno
export default app;