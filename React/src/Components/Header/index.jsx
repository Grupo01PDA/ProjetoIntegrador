import "./index.css";
import Search from "./Search"
import Connection from "./Connection";

function Header() {
  return (
    <div className="header">
      <a href="/">
        <div className="logo">

        <img src="./images/logo.svg" alt="logoHomeStudy" />
        </div>
      </a>
      <Search />
      <Connection />
    </div>
  )
}

export default Header;