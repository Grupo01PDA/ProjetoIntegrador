import banco from "../../services/urlBase"
import "./index.css"
import { useEffect, useState } from "react";

function Posts(){
  const [ posts, setPosts ] = useState([])

  

  useEffect(() => {
    async function chamandoTodosOsPosts(){
      banco.get("/posts/todos")
      .then(res => res.data.Pequisar)
      .then(res => setPosts(res))
    }
    chamandoTodosOsPosts()
  }, [posts])

  return(
    <div className="postsUsers">
      
    </div>
  )
}

export default Posts