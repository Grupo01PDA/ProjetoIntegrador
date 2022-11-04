const criandoRankingController = async (req, res)=>{
  const db = require('../../connection/db');
  const ranking = require('../../models/ranking');
  //verifica se a tabela existe no banco
  //caso não existe ele cria
  //se existe ele insere os dados na tabela
  await db.sync()
  const { pontosMin } = req.body;
  const id = req.params.id;
  const novoRanking = await ranking.create({
    pontosMin,
    rankingIdUsuario: id
  })
  return res.status(200).json({ ranking: novoRanking });
};
module.exports = criandoRankingController;