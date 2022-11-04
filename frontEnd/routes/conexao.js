import express from "express"
const router = express.Router()

import cadastroELogin from "../controllers/connection/cadastroELogin.js"

router.get('/conectar', cadastroELogin.viewCadastroELogin)

export default router;
