var modalCadastro = document.getElementById("modalCadastro");
var modaldiv = document.getElementById("modalJanela");
var fecharModal = document.getElementById("fechar");

modalCadastro.addEventListener('click', function(){
  modaldiv.style.display = "block";
  fecharModal.addEventListener('click', function() {
    modaldiv.style.display = "none";
  })
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
