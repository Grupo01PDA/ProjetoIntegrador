const {hash} = require('bcrypt')
const criandoUsuarioController = async (req, res)=>{
  const db = require('../../connection/db')
  const usuario = require('../../models/user')
  //verifica se a tabela existe no banco
  //caso não existe ele cria
  //se existe ele insere os dados na tabela
  await db.sync()
  const { apelido, nome, sobrenome, escolaridade, email, senha } = req.body
  const senhaHash = await hash(senha,8)
  const novoUsuario = await usuario.create({
      apelido,
      nome,
      sobrenome,
      escolaridade,
      email,
      senha: senhaHash,
      sttsLogin: true
  })
  return res.status(201).json({ usuario: novoUsuario })
};
module.exports = criandoUsuarioController;