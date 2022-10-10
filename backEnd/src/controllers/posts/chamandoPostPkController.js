const chamandoPostsPkController = async (req, res) => {
    const post = require("../../models/posts")
    const usuario = require("../../models/user")
    const idPost = req.params.id
    const post = await post.findByPk(idPost, {include:usuario})
}

