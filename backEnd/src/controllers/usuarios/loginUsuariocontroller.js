 const {compare} = require('bcrypt')
 async function loginUsuarioController(req,res){

 const usuario = require("../../models/user")
 const {email, senha} = req.body;
 
 const usuarioExistente = await usuario.findOne({where:{
    email: email,
 } 
})
if(!usuarioExistente){
    return res.status(404).json({mensagem: "email ou senha inválido"})
   }
 const senhaMatch = await compare(senha, usuarioExistente.senha)
if(senhaMatch){
    await usuario.update({
        id: usuarioExistente.id,
        apelido: usuarioExistente.apelido,
        nome: usuarioExistente.nome,
        sobrenome: usuarioExistente.sobrenome,
        escolaridade: usuarioExistente.escolaridade,
        email: usuarioExistente.email,
        senha: usuarioExistente.senha,
        sttsLogin: true
    },{where: {id: usuarioExistente.id}})
}
const usuarioAtualizado = await usuario.findOne({where:{
    email: email
 } 
})
return res.json({mensagem: "logado com sucesso ", usuarioAtualizado})
}
module.exports = loginUsuarioController;