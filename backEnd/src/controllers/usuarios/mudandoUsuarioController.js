const mudandoUsuarioController = async (req, res) => {
  let usuario = require('../../models/user')
  const id = req.params.id
  const { nome, sobrenome, email, senha, escolaridade } = req.body
  const pessoa = await usuario.findByPk(id)
  await usuario.update({
          nome: nome || pessoa.nome,
          sobrenome: sobrenome || pessoa.sobrenome,
          senha: senha || pessoa.senha,
          email: email || pessoa.email,
          escolaridade: escolaridade || pessoa.escolaridade
      },
      { where: { id: id } }
  )
  const usuarioAtualizado = await usuario.findByPk(id)
  return res.json({ usuario: usuarioAtualizado });
};
module.exports = mudandoUsuarioController;