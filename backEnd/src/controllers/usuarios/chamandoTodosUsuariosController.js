const chamandoTodosUsuariosController = async (req, res) => {
    usuario = require('../../models/user')
    const totalUsuario = await usuario.findAll();
    return res.status(200).json({total: totalUsuario})
    }
    module.export = chamandoTodosUsuariosController;