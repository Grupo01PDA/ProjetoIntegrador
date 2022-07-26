const criandoUsuarioController = async (req, res)=>{
  const db = require('../../connection/db')
  const usuario = require('../../models/user')
  //verifica se a tabela existe no banco
  //caso não existe ele cria
  //se existe ele insere os dados na tabela
  await db.sync()
  const { nome, sobrenome, email, senha, escolaridade } = req.body
  const novoUsuario = await usuario.create({
      nome,
      sobrenome,
      senha,
      email,
      escolaridade
  })
  return res.status(201).json({ usuario: novoUsuario })
};
module.exports = criandoUsuarioController;