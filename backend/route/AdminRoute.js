const express = require('express');
const router = express.Router();
const cont = require('../controller/AdminLoginController')

router.post('/signin',cont.adminsignin);

module.exports = router;