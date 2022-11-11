const chamandoUsuarioApelidoController = async (req, res) => {
  let usuario = require('../../models/user')
  const { apelido } = req.body
  const pessoa = await usuario.findOne({where: {apelido: apelido}} )
  return res.json({ usuario: pessoa });
};
module.exports = chamandoUsuarioApelidoController;