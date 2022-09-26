import express from 'express'
const router = express.Router()

import getCadastroControler from '../controllers/connection/cadastroController.js'

router.get("/cadastro", getCadastroControler.viewCadastro)

router.post("/cadastro", getCadastroControler.postCadastro)

export default router;
