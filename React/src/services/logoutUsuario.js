import banco from "../services/urlBase"

async function logoutUsuario() {
  let emailUser = localStorage.getItem("email")
  await banco.post("/usuario/deslogar", {
    email: emailUser
  })
  .then(res => res.data.usuarioAtualizado)
  .then(res => {
    localStorage.clear();
    localStorage.setItem("statusLogin", res.sttsLogin)
  })
}

export default logoutUsuario;