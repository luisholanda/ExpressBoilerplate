/**
 * @Author: Luis Holanda <luisholanda>
 * @Date:   12-Aug-2017
 * @Email:  luiscmholanda@gmail.com
 * @Last modified by:   luisholanda
 * @Last modified time: 12-Aug-2017
 */



var express = require('express');
var render = require('../bin/render');
var marko = require('marko');
var router = express.Router();

/* GET home page. */

var home = require('../pages/home');
router.get('/', function(req, res) {
  render(home, res);
});

module.exports = router;
