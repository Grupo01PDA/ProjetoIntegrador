const { compare } = require('bcrypt')
async function loginUsuarioController(req, res) {
  const usuario = require('../../models/user')

  const { email } = req.body

  const usuarioExistente = await usuario.findOne({
    where: {
      email: email
    }
  })
  usuarioExistente.sttsLogin = false
  await usuario.update(
    {
      id: usuarioExistente.id,
      apelido: usuarioExistente.apelido,
      nome: usuarioExistente.nome,
      sobrenome: usuarioExistente.sobrenome,
      escolaridade: usuarioExistente.escolaridade,
      email: usuarioExistente.email,
      senha: usuarioExistente.senha,
      sttsLogin: usuarioExistente.sttsLogin
    },
    { where: { id: usuarioExistente.id } }
  )

  const usuarioAtualizado = await usuario.findOne({
    where: {
      email: email
    }
  })
  return res.json({ mensagem: 'Deslogado com sucesso ', usuarioAtualizado })
}
module.exports = loginUsuarioController
