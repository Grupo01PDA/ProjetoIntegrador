import banco from "./urlBase"

async function cadastrarUsuario(data) {
  await banco.post("/usuario", {
    apelido: data.apelido,
    nome: data.nome,
    sobrenome: data.sobrenome,
    escolaridade: data.escolaridade,
    email: data.email,
    senha: data.senha
  }).then((res) => res.data.usuario)
  .then(res => {
    localStorage.setItem("id", res.id)
    localStorage.setItem("apelido", res.apelido)
    localStorage.setItem("nome", res.nome)
    localStorage.setItem("statusLogin", res.sttsLogin)
    localStorage.setItem("email", res.email)
  })
  .catch (function(error){
    console.log(error)
  })
}

export default cadastrarUsuario