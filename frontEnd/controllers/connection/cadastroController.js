const getCadastroControler = {
  viewCadastro: (req, res) => {
    return res.render('pages/cadastro')
  },

  postCadastro: (req, res) => {
    console.log(req.body);
  }
}

module.exports = getCadastroControler;