var express = require('express');
var router = express.Router();

router.get('/home', function (req, res) {
  res.render('partials/main/home');
});

router.get('/game-list', function (req, res) {
  res.render('partials/main/game-list');
});

router.get('/skill-list', function (req, res) {
  res.render('partials/main/skill-list');
});

router.get('/skill-Detail', function (req, res) {
  res.render('partials/main/skill-detail');
});

router.get('/about', function (req, res) {
  res.render('partials/main/about');
});

router.get('/not-found', function (req, res) {
  res.render('partials/main/not-found');
});

module.exports = router;