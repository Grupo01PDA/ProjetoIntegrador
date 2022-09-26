import express from "express"
import path from "path"
import {fileURLToPath} from 'url'
const app = express()
const port = 4000
const __filename = fileURLToPath(import.meta.url);
import session from "express-session";

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false}))
app.use(express.json())

const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + '/public'))
app.use(session({
    secret: "batatinha123",
    resave: true,
    saveUninitialized: true
}))

import paginaInicial from "./routes/paginaInicial.js"
import conectar from "./routes/conexao.js"
import cadastro from "./routes/cadastro.js"
import login from "./routes/login.js"

app.get('/', paginaInicial)

app.get("/conectar", conectar)

app.get('/cadastro', cadastro)

app.post('/cadastro', cadastro)

app.get('/login', login)

app.post('/login', login)

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
