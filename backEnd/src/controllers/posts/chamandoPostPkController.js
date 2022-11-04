const chamandoPostsPkController = async (req, res) => {
    const post = require("../../models/posts")
    const usuario = require("../../models/user")
    const apelido = req.params.apelido
    const criarComUsuario = await post.findByPk(apelido, {include:usuario})
    return res.status(200).josn({post: criarComUsuario})
}

module.exports = chamandoPostsPkController
