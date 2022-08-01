const chamandoRankingsController = async(req, res) => {
  let ranking = require("../../models/ranking");
  const pegarRanking = await usuario.findAll();
  return res.status(200).json({Ranques: pegarRanking});
};
module.exports = chamandoRankingsController;
