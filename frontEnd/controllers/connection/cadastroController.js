import cadastroUsuario from "../../service/cadastroUsuario.js"

const getCadastroControler = {
  viewCadastro: (req, res) => {
    return res.render('pages/cadastro')
  },

  postCadastro: (req, res) => {
    let user = req.body
    cadastroUsuario(user)
    res.redirect("/");
  }
}

export default getCadastroControler;
