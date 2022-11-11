import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css"
import criarPost from "../../services/criarPost"

function Post(){
  const [ formValues, setFormValues ] = useState({});
  const navigate = useNavigate();

  function verificarSeLogado(){
    if (localStorage.getItem("statusLogin") === "false"){
      let msgLogar = document.querySelector('.msgLogar')
      let inputDescription = document.querySelector("#post")
      let botaoPostar = document.querySelector(".enviarPost")
      msgLogar.style = "display: flex"
      inputDescription.style = "width: 70%"
      botaoPostar.setAttribute("disabled", "true")
    }
  }
  function tirarMsg(){
    let msgLogar = document.querySelector(".msgLogar")
    let inputDescription = document.querySelector("#post")
    let botaoPostar = document.querySelector(".enviarPost")
    botaoPostar.removeAttribute("disabled", "false")
    msgLogar.style = "display: none"
    inputDescription.style = "width: 100%"
  }

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues)
  };

  const enviarPost = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    if(localStorage.getItem("statusLogin") === "false"){
      navigate("/login")
    } else {
      await criarPost(data)
      document.location.reload(true)
    }
  }
  

  return(
    <form className="formularioPost" onSubmit={enviarPost}>
      <div className="msgContainer">
        <textarea 
        type="text" 
        name="description" 
        className="inputDescription"
        onFocus={verificarSeLogado}
        onBlur={tirarMsg}
        placeholder="O que você aprendeu hoje?"
        onChange={inputChange}
        id="post" />
        <div className="msgLogar">Você não está logado, por favor entre com uma conta antes de postar</div>
      </div>
      <input className="enviarPost" type="submit" value="Postar" />
    </form>
  )
}

export default Post