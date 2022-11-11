import { useNavigate } from "react-router-dom";
import "./index.css";

function BarraLateral() {
  const navigate = useNavigate();

  function validarSeLogado(){
    let statusLogin = localStorage.getItem("statusLogin")
    if (statusLogin === "true"){
      navigate("/usuario")
    } else {
      navigate("/login")
    }
  }

  function navegarParaAbacomunidade(){
    navigate("/https://discord.gg/BWT7krxP")
  }

  return (
    <aside className="barra-lateral">
      <div className="lista">
        <li onClick={validarSeLogado} style={{ textDecoration: "none" }}>
            <h3>Perfil</h3>
        </li>
        <li onClick={navegarParaAbacomunidade} style={{ textDecoration: "none" }}>
            <h3>Comunidade</h3>
        </li>
      </div>
    </aside>
  );
}

export default BarraLateral;
