var express = require('express');
var router = express.Router();

// 首頁
router.get('/home', home);

// 遊戲區頁面
router.get('/game-list', gameList);

// 技能清單頁面
router.get('/skill-list', skillList);

// 技能詳細頁面
router.get('/skill-Detail', skillDetail);

// 關於我頁面
router.get('/about', about);

// 404, 找不到的頁面
router.get('/not-found', notFound);

module.exports = router;

//=============================================== functions

function home(req, res) {
  res.render('partials/main/home');
}

function gameList(req, res) {
  res.render('partials/main/game-list');
}

function skillList(req, res) {
  res.render('partials/main/skill-list');
}

function skillDetail(req, res) {
  res.render('partials/main/skill-detail');
}

function about(req, res) {
  res.render('partials/main/about');
}

function notFound(req, res) {
  res.render('partials/main/not-found');
}