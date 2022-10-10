const { compare } = require('bcrypt')
let armazenar = {}

async function loginUsuarioController(req, res) {
  const usuario = require('../../models/user')
  const { email, senha } = req.body

  const usuarioExistente = await usuario.findOne({
    where: {
      email: email
    }
  })
  if (!usuarioExistente) {
    return res.status(404).json({ mensagem: 'email ou senha inválido' })
  }
  const senhaMatch = await compare(senha, usuarioExistente.senha)
  if (senhaMatch) {
    usuarioExistente.sttsLogin = true
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
  armazenar = usuarioExistente
  } else {
    return res.status(403).json({ mensagem: 'email ou senha inválido' })
  }
  const usuarioAtualizado = await usuario.findOne({
    where: {
      email: email
    }
  })
  return res.json({ mensagem: 'Logado com sucesso ', usuarioAtualizado })
}
function getUsuario(){
  return armazenar
}

module.exports = {getUsuario, loginUsuarioController}

