import { useEffect } from "react"
import { useState } from "react"
import banco from "../../services/urlBase"
import "./index.css"

function Comunidade(){
  const [ users, setUsers ] = useState([])

  async function chamandoBanco(){
    await banco.get("/rankings/global")
    .then(res => setUsers(res.data.Allusers))
    .catch(error => alert(error))
  }

  useEffect(()=>{
    chamandoBanco()
    console.log(users)

  }, [users])

  return(
    <div className="comundidade">
      {users.map((user) => {
        return <div>{user.apelido}</div>
      })}
    </div>
  )
}

export default Comunidade