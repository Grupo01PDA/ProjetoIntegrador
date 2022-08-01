const express = require('express')
const usuarioRoute = require('../src/routes/user.routes')
const rankRoute = require('./routes/rank.routes')
const app = express()
const port = 4000
require('dotenv/config')

app.use(express.json())

app.use(usuarioRoute);

app.use(rankRoute);

app.listen(port, () => {
    console.log(`Server is runner on port: ${port}`)
})
