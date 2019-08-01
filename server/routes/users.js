var express = require('express');
var router = express.Router();
const usercontroller = require('../controller/usercontroller')

router.post('/login',usercontroller.login)

module.exports = router;
