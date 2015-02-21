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

router.get('/about', function (req, res) {
  res.render('partials/about');
});

module.exports = router;