const chamandoPostsController = async(req, res) => {
    let posts = require("../../models/posts");
    const pegarPosts = await posts.findAll();
    return res.status(200).json({Pequisar: pegarPosts})
  };
  module.exports = chamandoPostsController;