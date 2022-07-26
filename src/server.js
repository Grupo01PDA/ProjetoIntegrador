const express = require('express')
const app = express()
const port = 4000
require('dotenv/config')

app.use(express.json())

app.post('/usuario', async (req, res) => {
    const db = require('../../connection/db')
    const usuario = require('../../models/usuario')
    //verifica se a tabela existe no banco
    //caso não existe ele cria
    //se existe ele insere os dados na tabela
    await db.sync()
    const { nome, email } = req.body
    const novoUsuario = await usuario.create({
        nome,
        email
    })
    console.log(novoUsuario)
    return res.status(201).json({ usuario: novoUsuario })
})

app.get('/usuario', async (req, res) => {
    let usuario = require('../../models/usuario')
    const pegarUsuario = await usuario.findAll()
    return res.status(200).json({ Allusers: pegarUsuario })
})

app.put('/usuario/:id', async (req, res) => {
    let usuario = require('../../models/usuario')
    const id = req.params.id
    const { nome, email } = req.body
    const pessoa = await usuario.findByPk(id)
    await usuario.update(
        {
            nome: nome || pessoa.nome,
            email: email || pessoa.email
        },
        { where: { id: id } }
    )
    const usuarioAtualizado = await usuario.findByPk(id)
    return res.json({ usuario: usuarioAtualizado });
})

app.delete('/usuario/:id', async (req, res) =>{
  let usuario = require("../../models/usuario");
  const id = req.params.id;
  const pessoa = await usuario.findByPk(id);
  await usuario.destroy({
      where:{
          id: id
      }
  });
  return res.json({ mensagem: "Usuario deletado com sucesso: ", pessoa })
});

app.listen(port, () => {
    console.log(`Server is runner on port: ${port}`)
})
