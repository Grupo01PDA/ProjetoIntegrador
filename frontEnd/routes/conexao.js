import express from "express"
const router = express.Router()

import cadastroELogin from "../controllers/connection/cadastroELogin.js"

router.get('/', cadastroELogin.viewCadastroELogin)

export default router;
