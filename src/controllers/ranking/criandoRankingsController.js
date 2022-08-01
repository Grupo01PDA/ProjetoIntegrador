const criandoRankingController = async (req, res)=>{
  const db = require('../../connection/db')
  const ranking = require('../../models/ranking')
  //verifica se a tabela existe no banco
  //caso não existe ele cria
  //se existe ele insere os dados na tabela
  await db.sync()
  const { nome, pontosMin } = req.body
  const novoRanking = await ranking.create({
    nome,
    pontosMin
  })
  return res.status(201).json({ ranking: novoRanking })
};
module.exports = criandoRankingController;