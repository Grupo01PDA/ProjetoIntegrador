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
        <li>
          <h3>
            <a href="https://discord.gg/BWT7krxP">Comunidade</a>
          </h3>
        </li>
      </div>
    </aside>
  );
}

export default BarraLateral;
