const express = require("express");
const chamandoUsuarioApelidoController = require("../controllers/usuarios/chamandoUsuarioApelidoController");
const criandoUsuarioController = require("../controllers/usuarios/criandoUsuarioController");
const deletandoUsuarioController = require("../controllers/usuarios/deletandoUsuarioController");
const mudandoUsuarioController = require("../controllers/usuarios/mudandoUsuarioController");

const usuarioRoute = express.Router();

usuarioRoute.post("/usuario", criandoUsuarioController);

usuarioRoute.get("/usuario/:apelido", chamandoUsuarioApelidoController);

usuarioRoute.put("/usuario/:id", mudandoUsuarioController);

usuarioRoute.delete('/usuario/:id',deletandoUsuarioController);

module.exports = usuarioRoute;