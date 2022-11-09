import { useState } from "react"
import banco from "../../services/urlBase"
import "./index.css"

function Comunidade(){
  const [ users, setUsers ] = useState()
  banco.get("/rankings/global")
  .then(res => setUsers(res.data.Allusers))
  .catch(error => alert(error))

  return(
    <div className="comundidade">
      {users.map(function(user){
        return <li>Apelido: {user.apelido} | Nome: {user.nome}</li>
      })}
    </div>
  )
}

export default Comunidade