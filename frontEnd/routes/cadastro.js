const express = require('express')
const router = express.Router()

const getCadastroControler = require('../controllers/connection/cadastroController')

router.get('/cadastro', getCadastroControler.viewCadastro);

router.post('/cadastro', getCadastroControler.postCadastro);

module.exports = router
