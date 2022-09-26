import express from 'express'
const router = express.Router()

import getLoginControler from '../controllers/connection/loginController.js'

router.get('/login', getLoginControler.viewLogin)

export default router