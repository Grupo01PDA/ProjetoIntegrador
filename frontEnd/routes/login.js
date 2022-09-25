const express = require('express')
const router = express.Router()

const getLoginControler = require('../controllers/connection/loginController')

router.get('/login', getLoginControler.viewLogin);

module.exports = router
