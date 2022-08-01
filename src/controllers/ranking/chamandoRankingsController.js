const chamandoRankingsController = async(req, res) => {
  let ranking = require("../../models/ranking");
  const pegarRanking = await ranking.findAll();
  return res.status(200).json({Ranques: pegarRanking});
};
module.exports = chamandoRankingsController;
