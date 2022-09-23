require('dotenv/config')
const express = require('express')
const cors = require("cors")
const usuarioRoute = require('../src/routes/user.routes')
const rankRoute = require('./routes/rank.routes')
const app = express()
const port = 3000;

app.use(express.json())
app.use(cors());
app.use(usuarioRoute);
app.use(rankRoute);

app.listen(port, () => {
    console.log(`Server is runner on port: ${port}`)
})
