const express = require("express");
const chamandoUsuarioApelidoController = require("../controllers/usuarios/chamandoUsuarioApelidoController");
const criandoUsuarioController = require("../controllers/usuarios/criandoUsuarioController");
const deletandoUsuarioController = require("../controllers/usuarios/deletandoUsuarioController");
const mudandoUsuarioController = require("../controllers/usuarios/mudandoUsuarioController");
const loginUsuarioController = require("../controllers/usuarios/loginUsuarioController")
const deslogandoUsuarioController = require("../controllers/usuarios/deslogandoUsuarioController")

const usuarioRoute = express.Router();

usuarioRoute.post("/usuario", criandoUsuarioController);

usuarioRoute.post("/usuario/pegar-usuario", chamandoUsuarioApelidoController);

usuarioRoute.put("/usuario/:id", mudandoUsuarioController);

usuarioRoute.delete('/usuario/:id',deletandoUsuarioController);

usuarioRoute.post("/usuario/login", loginUsuarioController);

usuarioRoute.post("/usuario/deslogar", deslogandoUsuarioController);

module.exports = usuarioRoute;