const express = require("express");
const router = express.Router();

const paginaInicialTela = require("../controllers/paginaInicialTela")

router.get("/", paginaInicialTela.viewTela);

module.exports = router;