import loginUsuario from '../../service/loginUsuario.js'

const getLoginControler = {
  viewLogin: (req, res) => {
    return res.render('pages/login')
  },
  postLogin: (req, res) => {
    let user = req.body
    loginUsuario(user)
    res.redirect('/usuario')
  }
}

export default getLoginControler
