import banco from "./urlBase"

async function cadastrarUsuario(data) {
  let userCreated = 0;
  await banco.post("/usuario", {
    apelido: data.apelido,
    nome: data.nome,
    sobrenome: data.sobrenome,
    escolaridade: data.escolaridade,
    email: data.email,
    senha: data.senha
  }).then(function (res){
    if(res.status === 201){
      usuarioLocalget(data)
      userCreated = 1;
    }
  }).catch (function(error){
    console.log(error)
  })
  return userCreated;
}

async function usuarioLocalget(user){
  await banco.post("/usuario/pegar-usuario", {
    apelido: user.apelido
  }).then(res => {
    localStorage.setItem("id", res.id)
    localStorage.setItem("apelido", res.apelido)
    localStorage.setItem("statusLogin", res.sttsLogin)
    localStorage.setItem("nome", res.nome)
    localStorage.setItem("email", res.email)
  })
}

export default cadastrarUsuario