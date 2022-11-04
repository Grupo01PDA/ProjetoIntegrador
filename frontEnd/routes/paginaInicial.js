import express from "express";
const router = express.Router();

import paginaInicialTela from "../controllers/paginaInicialTela.js"

router.get("/", paginaInicialTela.viewTela);

export default router