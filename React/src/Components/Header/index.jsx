import "./index.css";
import Connection from "./Connection";

function Header() {
  return (
    <div className="header">
      <a href="/">
        <div className="logo">

        <img src="./images/logo.svg" alt="logoHomeStudy" />
        </div>
      </a>
      <Connection />
    </div>
  )
}

export default Header;