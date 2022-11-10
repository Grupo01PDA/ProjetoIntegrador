const criandoPostsController = async (req, res) => {
  const db = require("../../connection/db");
  const posts = require("../../models/posts");
  const usuario = require("../../models/user");

  await db.sync();
  const { description } = req.body;
  const id = req.params.id
  const postador = await usuario.findOne({where:{id: id}});
  if (!postador.sttsLogin) {
    return res.status(400).json({ messege: "usuario não está logado" });
  }
  const novoPost = await posts.create({
    description: description,
    postUsuarioId: id
  });
  return res.status(200).json({ posts: novoPost});
};

module.exports = criandoPostsController;
