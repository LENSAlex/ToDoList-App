var express = require('express');
var router = express();

//files
const user = require("./../queries/user")

//API version 1
router.get('/user/test', user.test);

module.exports = router;