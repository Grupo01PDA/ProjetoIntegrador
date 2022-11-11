import { Link } from "react-router-dom";
import "./index.css";

function BarraLateral() {
  return (
    <aside className="barra-lateral">
      <div className="lista">
        <Link to="/usuario" style={{ textDecoration: "none" }}>
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
