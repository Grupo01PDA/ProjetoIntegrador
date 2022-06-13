const input = document.querySelector('#checkbox')


input.addEventListener('change', function () {
  if(input.checked == true){
    document.getElementById('tema').href = 'css/usuariodark.css'
  } else{
    document.getElementById('tema').href = 'css/usuario.css'
  }
})



var modalCadastro = document.getElementById("modalCadastro");
var modaldiv = document.

modalCadastro.addEventListener('click', function(){

})







const posts = document.getElementById("posts");
const salvos = document.getElementById("salvos");
const provas = document.getElementById("provas");
const feed = document.getElementById("feed");
var x = feed.scrollWidth;
var xSalvo = x/3;

posts.addEventListener('click', function(){
  posts.classList.add("btnActive")
  salvos.classList.remove("btnActive")
  provas.classList.remove("btnActive")
  feed.scrollTo(0, 0)
})

salvos.addEventListener('click', function(){
  salvos.classList.add("btnActive")
  posts.classList.remove("btnActive")
  provas.classList.remove("btnActive")
  feed.scrollTo(xSalvo, 0)
})

provas.addEventListener('click', function(){
  provas.classList.add("btnActive")
  posts.classList.remove("btnActive")
  salvos.classList.remove("btnActive")
  feed.scrollTo(x, 0)
})
