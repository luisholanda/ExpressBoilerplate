var express = require('express');
var render = require('../bin/render');
var marko = require('marko');
var router = express.Router();

/* GET home page. */

var home = require('../views/home');
router.get('/', function(req, res) {
  render(home, res);
});

module.exports = router;
