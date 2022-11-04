import "./index.css";
import Search from "./Search"
import Connection from "./Connection";

function Header() {
  return (
    <div className="header">
      <a href="/PaginaInicial">
        <img src="./images/logo.svg" alt="logoHomeStudy" />
      </a>
      <Search />
      <Connection />
    </div>
  )
}

export default Header;