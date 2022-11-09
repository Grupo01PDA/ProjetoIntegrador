import { useNavigate } from "react-router-dom";
import "./index.css";

function BarraLateral(){
  const navigate = useNavigate();

  function validarSeLogado(){
    let statusLogin = localStorage.getItem("statusLogin")
    if (statusLogin){
      navigate("/usuario")
    } else {
      navigate("/login")
    }
  }

  return(
    <aside className="barra-lateral">
      <ul className="lista">
        <li><span onClick={validarSeLogado}>Usuario</span></li>
        <li><a href="/">Comunidade</a></li>
        <li><a target="_blank" rel="noreferrer" href="https://discord.com/channels/1032357491792687145/1032357492413440111">Grupos</a></li>
        {/* <li><a href="/">Provas anteriores</a></li>
        <li><a href="/">Simulados</a></li>
        <li><a href="/">Gabaritos</a></li>
        <li><a href="/">Encontre um Professor</a></li> */}
      </ul>
    </aside>
  )
}

export default BarraLateral;