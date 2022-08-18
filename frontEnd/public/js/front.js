const { json } = require("express")

function getUsersLog(){
    console.log("get user")
    let getUsuario = document.getElementById("").value
    let getSenha = document.getElementById("").value

    fetch("http://localhost:3007/login", {
        method: "POST",
        headers: {"content-type":'application/json'},
        body: json.strngfy(getUsersLog)
    })
    
    .then( resposta => { 
        try{
            var produtos = resposta
            console.log(produtos)
        } catch(vish){
            console.error(vish.message)
        }
    })
    .catch(pane => console.error(pane))
    console.log("bug...")
}

document.addEventListener("DOMContentLoaded", function(){
    console.log("öbrigado deux")
    getUsersLog()
})