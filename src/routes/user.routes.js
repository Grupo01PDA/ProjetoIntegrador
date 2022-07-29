const express = require("express");
const chamandoUsuarioController = require("../controllers/usuarios/chamandoUsuarioController");
const criandoUsuarioController = require("../controllers/usuarios/criandoUsuarioController");
const deletandoUsuarioController = require("../controllers/usuarios/deletandoUsuarioController");
const mudandoUsuarioController = require("../controllers/usuarios/mudandoUsuarioController");

const usuarioRoute = express.Router();

usuarioRoute.post("/usuario", criandoUsuarioController);

usuarioRoute.get("/usuario", chamandoUsuarioController);

usuarioRoute.put("/usuario/:id", mudandoUsuarioController);

usuarioRoute.delete('/usuario/:id',deletandoUsuarioController);

module.exports = usuarioRoute;