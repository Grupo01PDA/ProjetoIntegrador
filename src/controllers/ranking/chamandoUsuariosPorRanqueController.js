const chamandoRankingController = async(req, res) => {
  let usuario = require("../../models/user");
  const pegarUsuario = await usuario.findAll();
  return res.status(200).json({Allusers: pegarUsuario});
};
module.exports = chamandoRankingController;
