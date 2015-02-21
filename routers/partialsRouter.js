var express = require('express');
var router = express.Router();

router.get('/home', function (req, res) {
  res.render('partials/home');
});

router.get('/game-list', function (req, res) {
  res.render('partials/game-list');
});

router.get('/skill-list', function (req, res) {
  res.render('partials/skill-list');
});

router.get('/skill-Detail', function (req, res) {
  res.render('partials/skill-Detail');
});

router.get('/about', function (req, res) {
  res.render('partials/about');
});

router.get('/not-found', function (req, res) {
  res.render('partials/not-found');
});

module.exports = router;