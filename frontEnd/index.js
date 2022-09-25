const express = require('express')
const app = express()
const port = 4000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(express.json())
app.use(express.static(__dirname + '/public'))

const paginaInicial = require("./routes/paginaInicial")
const conectar = require("./routes/conexao")
const cadastro = require("./routes/cadastro")
const login = require("./routes/login")

app.get('/', paginaInicial)

app.get("/conectar", conectar)

app.get('/cadastro', cadastro)

app.get('/login', login)

app.get('/erro', (req, res) => {
    res.render('pages/Erro')
})

app.get('/noticias', (req, res) => {
    res.render('pages/noticias')
})

app.get('/usuario', (req, res) => {
    res.render('pages/usuario')
})

app.listen(port, () => {
    console.log(`projeto rodando na port: ${port}`)
})
