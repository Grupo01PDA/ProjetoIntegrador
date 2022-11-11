import { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function BarraLateral() {
  const [ page, setPage ] = useState("");

  function validarSeLogado(){
    let statusLogin = localStorage.getItem("statusLogin")
    if (statusLogin){
      setPage("/usuario")
    } else {
      setPage("/login")
    }
  }

  return (
    <aside className="barra-lateral">
      <div className="lista">
        <Link to={page} onClick={validarSeLogado} style={{ textDecoration: "none" }}>
          <li>
            <h3 href="/usuario">Perfil</h3>
          </li>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <li>
            <h3 href="/">Comunidade</h3>
          </li>
        </Link>
      </div>
    </aside>
  );
}

export default BarraLateral;
