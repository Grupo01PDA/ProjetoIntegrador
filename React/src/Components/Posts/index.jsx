import { useState } from "react"
import { useEffect } from "react"
import banco from "../../services/urlBase"
import "./index.css"

function Posts(){
  const [ posts, setPosts ] = useState([]);

  useEffect(() =>{
    banco.get("/posts/todos")
    .then(res => res.data.Pequisar)
    .then(res => {
      setPosts(res.reverse())
    })
    .catch(error => console.log(error))
  }, [])

  return(
    <div className="postsUsers">
      {
        posts.map((post) => {
          return <div className="post" key={post.id}>{post.description}</div>
        })
      }    
    </div>
  )
}

export default Posts