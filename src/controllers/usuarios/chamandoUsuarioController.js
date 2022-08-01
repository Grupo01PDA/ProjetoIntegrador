

const chamandoUsuarioController = async(req, res) => {
  let usuario = require("../../models/user");
  const pegarUsuario = await usuario.findAll();
  return res.status(200).json({Allusers: pegarUsuario});
};
module.exports = chamandoUsuarioController;

const mudandoUsuarioPKController = async (req, res) => {
  let usuario = require('../../models/user')
  const Ranking = require("../../models/ranking");
  const id = req.params.id
  const pessoa = await usuario.findByPk(id, {include: Ranking} )
  return res.json({ usuario: usuarioAtualizado });
};
module.exports = mudandoUsuarioPKController;