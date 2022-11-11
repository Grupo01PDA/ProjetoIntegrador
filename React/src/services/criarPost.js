import banco from "./urlBase"

async function criarPost(data) {
  let id = localStorage.getItem("id")
  banco.post(`/posts/${id}`, data)
  .catch(error => console.log(error))
}

export default criarPost