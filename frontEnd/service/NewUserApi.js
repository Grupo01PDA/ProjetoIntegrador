document.addEventListener("DOMContentLoaded", function () {
async function pegar() {
    fetch("http://localhost:4000/pegarusuario")
        .then(res => res.json())
        .then(res => {
            const usuarios = res.usuarios;
            const getId = document.querySelector(".input_cadastro");
            dados = getId.value
            usuarios.map(usuario => {
                const li = document.createElement("li")
                li.innerHTML = usuario.nome
                getId.appendChild(li)
            })
        }).catch(error => {
            console.log(error)
        })
}
})


async function enviar() {
    const dados = document.getElementByClass(".input_cadastro");
    const valorDados = dados.value
    console.log(valorDados)
    const adress = await fetch(`http://localhost:4000/${valorDados}/criarUsu`)
    const jsonAdress = await adress.json()
    console.log(jsonAdress)
    for (var atributo in jsonAdress) {
        atributo.innerHTML = jsonAdress[atributo];        
    }
}