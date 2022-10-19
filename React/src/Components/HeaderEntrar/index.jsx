import "./index.css";


function HeaderEntrar() {
  return (
    <div className="header">
      <a href="/">
        <img src="./images/logo.svg" alt="logoHomeStudy" />
      </a>
      <div className="links">

        <a className="cadastrar-botao" href="/cadastro">Cadastre-se</a>
        <a className="login-botao" href="/login">Conecte-se</a>


        <input className="input-check" type="checkbox" id="checkbox" />
        <label class="checkbox" for="checkbox">
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-circle-half" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
          </svg>
        </label>
      </div>
    </div>
  )
}

export default HeaderEntrar;