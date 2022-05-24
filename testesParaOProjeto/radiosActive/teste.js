const posts = document.getElementById("posts");
const salvos = document.getElementById("salvos");
const provas = document.getElementById("gabaritos");


posts.addEventListener('click', function(){
  posts.classList.add("btnActive")
  salvos.classList.remove("btnActive")
  provas.classList.remove("btnActive")
})

salvos.addEventListener('click', function(){
  salvos.classList.add("btnActive")
  posts.classList.remove("btnActive")
  provas.classList.remove("btnActive")
})

provas.addEventListener('click', function(){
  provas.classList.add("btnActive")
  posts.classList.remove("btnActive")
  salvos.classList.remove("btnActive")
})

