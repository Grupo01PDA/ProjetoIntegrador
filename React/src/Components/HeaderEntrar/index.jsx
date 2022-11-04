import "./index.css";
import Connectio from "../Header/Connection";



function HeaderEntrar() {
  return (
    <div className="headerEntrar">
      <a href="/">
        <img src="./images/logo.svg" alt="logoHomeStudy" />
      </a>
      <div className="links">

        <a className="cadastrar-botao" href="/cadastro">Cadastre-se</a>
        <a className="login-botao" href="/login">Conecte-se</a>
        <Connectio />
      </div>
    </div>
  )
}

export default HeaderEntrar;