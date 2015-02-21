var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000)

app.use(serveStatic('public'));

app.get('/partials/home', function (req, res) {
  res.render('partials/home');
});

app.get('/partials/game-list', function (req, res) {
  res.render('partials/game-list');
});

app.get('/partials/skill-list', function (req, res) {
  res.render('partials/skill-list');
});

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