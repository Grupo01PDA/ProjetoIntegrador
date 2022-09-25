const express = require('express')
const router = express.Router()

const cadastroELogin = require('../controllers/connection/cadastroELogin')

router.get('/conectar', cadastroELogin.viewCadastroELogin)

module.exports = router
