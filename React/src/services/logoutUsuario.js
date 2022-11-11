import banco from "../services/urlBase"

async function logoutUsuario() {
  let emailUser = localStorage.getItem("email")
  await banco.post("/usuario/deslogar", {
    email: emailUser
  })
  .then(res => res.data.usuarioAtualizado)
  .then(res => {
    localStorage.removeItem("statusLogin")
    let statusObj = res.sttsLogin
    let status = statusObj.toString()
    localStorage.setItem("statusLogin", status)
  })
}

export default logoutUsuario;