const chamandoUsuarioApelidoController = async (req, res) => {
  let usuario = require('../../models/user')
  const Ranking = require("../../models/ranking");
  const apelido = req.params.apelido
  const pessoa = await usuario.findOne({where: {apelido: apelido}}, {include: Ranking} )
  return res.json({ usuario: pessoa });
};
module.exports = chamandoUsuarioApelidoController;