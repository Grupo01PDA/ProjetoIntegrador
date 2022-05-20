document.body.setAttribute("class", "");

function login(){
  document.body.classList.add("background-login");
}

function cadastro(){
  document.body.classList.add("background-cadastro");
}

function backgroundLogin(){
  document.body.classList.remove("background-login");
}

function backgroundCadastro(){
  document.body.classList.remove("background-cadastro");
}