var express = require('express');
var serveStatic = require('serve-static');
var mongoose = require('mongoose');

var apiRouter = require('./routers/apiRouter');
var mainRouter = require('./routers/partials/mainRouter');

// 憑據；證書
var credentials = require('./credentials.js');

var app = express();

// keepAlive => 避免長時間執行的應用程式(如網站) 發生資料庫連結錯誤
var opts = {
  server: {
    socketOptions: { keepAlive: 1 }
  }
};
switch(app.get('env')) {
  case 'development':
    mongoose.connect(credentials.mongo.development.connectionString, opts);
    break;
  case 'production':
    mongoose.connect(credentials.mongo.production.connectionString, opts);
    break;
  default:
    throw new Error('Unknown execution environment: ' + app.get('env'));
}

app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);

app.locals.dateFullYear = new Date().getFullYear();

app.use(serveStatic('public'));

app.use('/partials/main', mainRouter);

app.use('/api', apiRouter);

app.use(function (req, res) {
  res.render('layout-main');
});

app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.render('500-main');
});

app.listen(app.get('port'), function () {
  console.log('listen port : %s', app.get('port'));
});