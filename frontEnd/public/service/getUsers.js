async function getAllUsers(){
  await fetch("https://localhost:3000/getallusers")
  .then(res => res.json())
  .then(res => console.log(res))
}

document.addEventListener("DOMContentLoaded", function(){
  console.log("chamando todos os usuarios");
  getAllUsers();
})