const express = require("express");
const chamandoUsuarioApelidoController = require("../controllers/usuarios/chamandoUsuarioApelidoController");
const criandoUsuarioController = require("../controllers/usuarios/criandoUsuarioController");
const deletandoUsuarioController = require("../controllers/usuarios/deletandoUsuarioController");
const mudandoUsuarioController = require("../controllers/usuarios/mudandoUsuarioController");
const chamandoTodosUsuariosController = require("../controllers/usuarios/mudandoUsuarioController")
const loginUsuarioController = require("../controllers/usuarios/mudandoUsuarioController")

const usuarioRoute = express.Router();

usuarioRoute.post("/usuario", criandoUsuarioController);

usuarioRoute.get("/usuario/:apelido", chamandoUsuarioApelidoController);

usuarioRoute.put("/usuario/:id", mudandoUsuarioController);

usuarioRoute.delete('/usuario/:id',deletandoUsuarioController);

usuarioRoute.get("usuario/listar", chamandoTodosUsuariosController)

usuarioRoute.get("usuario/login", loginUsuarioController)

module.exports = usuarioRoute;