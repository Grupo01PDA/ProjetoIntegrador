import banco from "../services/urlBase";

async function loginUsuario(values){
  await banco.post('/usuario/login', { 
    email: values.email,
    senha: values.password
  })
  .then(res => res.data)
  .then(res => res.usuarioAtualizado)
  .then(res => {
    localStorage.setItem("id", res.id)
    localStorage.setItem("apelido", res.apelido)
    localStorage.setItem("nome", res.nome)
    localStorage.setItem("statusLogin", res.sttsLogin)
    localStorage.setItem("email", res.email)
  })
  .catch(error => console.log(error))
}

export default loginUsuario