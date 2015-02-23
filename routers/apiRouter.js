var express = require('express');

var Skill = require('../models/skill.js');

var router = express.Router();

// 取得技能清單
router.get('/skills', skillList);

// 取得技能詳細
router.get('/skill/:id', skillDetail);

module.exports = router;

//=============================================== functions

function skillList(req, res) {
  Skill.find(function (err, skills) {
    if(skills.length) {
      res.json(skills);
      return;
    }

    setSkillData(req, res);
  });
}

function skillDetail(req, res) {
  var id = req.params.id;

  Skill.findById(id, 'label name info content', function (err, skill) {
    res.json(skill);
  });
}

//=============================================== datas

function setSkillData() {
  new Skill({
    label: 'js',
    name: 'Node.js',
    info: "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.",
    content: "Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices."
  }).save();

  new Skill({
    label: 'js',
    name: 'Express',
    info: "Node.js web application framework",
    content: "Fast, unopinionated, minimalist web framework for Node.js"
  }).save();

  new Skill({
    label: 'js',
    name: 'AngularJS',
    info: "Superheroic JavaScript MVW Framework",
    content: "HTML is great for declaring static documents, but it falters when we try to use it for declaring dynamic views in web-applications. AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop."
  }).save();

  new Skill({
    label: 'css',
    name: 'Foundation',
    info: "Responsive front-end framework",
    content: "The most advanced responsive front-end framework in the world."
  }).save();

  new Skill({
    label: 'js',
    name: 'Angular Foundation',
    info: "Angular directives for Foundation",
    content: "This repository contains a set of native AngularJS directives based on Foundation's markup and CSS. As a result no dependency on jQuery or Foundation's JavaScript is required."
  }).save();

  new Skill({
    label: 'js',
    name: 'Less.js',
    info: "Less is a CSS pre-processor",
    content: "It extends the CSS language, adding features that allow variables, mixins, functions and many other techniques that allow you to make CSS that is more maintainable, themable and extendable."
  }).save();

  new Skill({
    label: 'js',
    name: 'TypeScript',
    info: "Superset of JavaScript",
    content: "A typed superset of JavaScript that compiles to plain JavaScript"
  }).save();

  new Skill({
    label: '',
    name: 'Git',
    info: "Version control system",
    content: "A free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency"
  }).save();

  new Skill({
    label: '',
    name: 'GitHub',
    info: "Build software better, together.",
    content: "Powerful collaboration, code review, and code management for open source and private projects."
  }).save();

  new Skill({
    label: 'js',
    name: 'Grunt',
    info: "The JavaScript Task Runner",
    content: "The less work you have to do when performing repetitive tasks like minification, compilation, unit testing, linting, etc."
  }).save();

  new Skill({
    label: 'html',
    name: 'HTML',
    info: "HyperText Markup Language",
    content: ""
  }).save();

  new Skill({
    label: 'css',
    name: 'CSS',
    info: "Cascading Style Sheets",
    content: ""
  }).save();

  new Skill({
    label: 'js',
    name: 'JS',
    info: "JavaScript",
    content: "The programming language of the Web. All modern HTML pages are using JavaScript."
  }).save();

  new Skill({
    label: 'js',
    name: 'jQuery',
    info: "JavaScript Library",
    content: "It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers."
  }).save();

  new Skill({
    label: 'js',
    name: 'D3.js',
    info: "Data-Driven Documents",
    content: "A JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS."
  }).save();

  new Skill({
    label: 'css',
    name: 'Normalize.css',
    info: "CSS resets.",
    content: "A modern, HTML5-ready alternative to CSS resets."
  }).save();

  new Skill({
    label: 'js',
    name: 'Modernizr',
    info: "The feature detection library for HTML5/CSS3",
    content: ""
  }).save();

  new Skill({
    label: 'js',
    name: 'Mocha',
    info: "The fun, simple, flexible JavaScript test framework",
    content: ""
  }).save();

  new Skill({
    label: 'db',
    name: 'MongoDB',
    info: "An open-source document database, and the leading NoSQL database. Written in C++, MongoDB features",
    content: ""
  }).save();

  new Skill({
    label: 'db',
    name: 'Mongoose ODM',
    info: "elegant mongodb object modeling for node.js",
    content: ""
  }).save();

  new Skill({
    label: 'css',
    name: 'RWD',
    info: "Responsive Web Design",
    content: "An approach to web design aimed at crafting sites to provide an optimal viewing experience—easy reading and navigation with a minimum of resizing, panning, and scrolling—across a wide range of devices."
  }).save();

  new Skill({
    label: '',
    name: 'Azure',
    info: "Microsoft Azure",
    content: ""
  }).save();
}