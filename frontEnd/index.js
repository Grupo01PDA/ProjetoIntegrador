const { response } = require('express')
const express = require('express')
const app = express()
const port = 4000

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))


app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/cadastro-login', (req, res) => {
    res.render('pages/cadastro-login')
})

app.get('/cadastro', (req, res) => {
    res.render('pages/cadastro')
})

app.get('/erro', (req, res) => {
    res.render('pages/Erro')
})

app.get('/login', (req, res) => {
    res.render('pages/login')
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
