const { getUsuario } = require('../usuarios/loginUsuariocontroller');

const criandoPostsController = async (req, res)=>{
const db = require('../../connection/db')
const posts = require('../../models/posts')
const usuario = require("../../models/user")
const verificaUsuario = getUsuario()

await db.sync()
const { description } = req.body
const usuarioLogado = await usuario.findOne({where: {apelido: verificaUsuario[0].apelido}})
if(!usuarioLogado){
    return res.status(400).json({ messege: "usuario não está logado" })
}
const novoPost = await posts.create({
    description
})
    return res.status(200).json({ posts: novoPost })
};

module.exports = criandoPostsController;

