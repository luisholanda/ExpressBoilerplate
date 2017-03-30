var express = require('express');
var minifier = require('html-minifier');
var marko = require('marko');
var router = express.Router();

// Minify function
function minify (str) {
  return minifier(str, {
    collapseWhitespace: true,
    collapseInlineWhitespace: true,
    minifyCSS: true,
    minifyJS: true,
    removeComments: true,
    sortAttributes: true,
    sortClassName: true
  })
}

/* GET home page. */
var home = require('../views/home');
router.get('/', function(req, res) {
  home.render({}).then(function (str) {
    var min = minify(str)
    res.send(min)
  })
});

module.exports = router;
