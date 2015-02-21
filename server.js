var express = require('express');
var serveStatic = require('serve-static');
var mongoose = require('mongoose');

var apiRouter = require('./routers/apiRouter');
var partialsRouter = require('./routers/partialsRouter');

var credentials = require('./credentials.js');

var app = express();

var opts = {
  server: {
    socketOptions: { keepAlive: 1 }
  }
};
switch(app.get('env')) {
  case 'development':
    mongoose.connect(credentials.mongo.development.connectionString);
    break;
  case 'production':
    mongoose.connect(credentials.mongo.production.connectionString);
    break;
  default:
    throw new Error('Unknown execution environment: ' + app.get('env'));
}

app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000)

app.use(serveStatic('public'));

app.use('/partials', partialsRouter);

app.use('/api', apiRouter);

app.use(function (req, res) {
  res.render('layout');
});

app.use(function (err, req, res, next) {
  console.log(err.stack);
  res.render('500');
});

app.listen(app.get('port'), function () {
  console.log('listen port : %s', app.get('port'));
});