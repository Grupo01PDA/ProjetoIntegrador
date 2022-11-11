const chamandoPostsPkController = async (req, res) => {
    const post = require("../../models/posts")
    const idUsuario = req.params.id
    const allPosts = await post.findAll({where:{postUsuarioId:idUsuario}})

    return res.status(200).json({allPosts: allPosts})
}
module.exports = chamandoPostsPkController;