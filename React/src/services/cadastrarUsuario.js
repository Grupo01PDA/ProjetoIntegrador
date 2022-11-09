import banco from "./urlBase"

async function cadastrarUsuario(data) {
  let userCreated = 0;
  banco.post("/usuario", {
    apelido: data.apelido,
    nome: data.nome,
    sobrenome: data.sobrenome,
    escolaridade: data.escolaridade,
    email: data.email,
    senha: data.senha
  }).then(function (res){
    if(res.statusCode === 201){
      userCreated = 1
    }
  }).catch (function(error){
    console.log(error)
  })
  return userCreated;
}

export default cadastrarUsuario