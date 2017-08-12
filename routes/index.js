/**
 * @Author: Luis Holanda <luisholanda>
 * @Date:   12-Aug-2017
 * @Email:  luiscmholanda@gmail.com
 * @Last modified by:   luisholanda
 * @Last modified time: 12-Aug-2017
 */



var express = require('express');
var marko = require('marko');
var router = express.Router();

/* GET home page. */

var home = require('../views/pages/home')
router.get('/', (req, res) => {
    res.marko(home);
});

module.exports = router;
