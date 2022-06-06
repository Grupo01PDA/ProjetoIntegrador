const express = require('express')
const app = express();
const port = 3000

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"))

app.get("/", (req, res) => {
    res.render('ejs/views/pages/cadastro-login')
}) 

app.listen(port, () =>{
     console.log(`projeto rodando na port: ${port}`)
})