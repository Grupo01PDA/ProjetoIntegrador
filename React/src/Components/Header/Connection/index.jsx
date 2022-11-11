import "./index.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logoutUsuario from "../../../services/logoutUsuario"

function Connection() {
  const navigate = useNavigate();
  function modoDark() {
    function brancoPreto(tema) {
      document.documentElement.style.setProperty("--preto-base", tema);
    }

    brancoPreto("#f0f0f0");

    function brancoBase(tema) {
      document.documentElement.style.setProperty("--branco-base", tema);
    }
    brancoBase("#0f0f0f");

    function brancoFundo(tema) {
      document.documentElement.style.setProperty("--branco-de-fundo", tema);
    }
    brancoFundo("#1b1b1b");
  }

  function modoWhite() {
    function setColo(tema) {
      document.documentElement.style.setProperty("--preto-base", tema);
    }

    setColo("#0f0f0f");

    function brancoBase(tema) {
      document.documentElement.style.setProperty("--branco-base", tema);
    }
    brancoBase("#f0f0f0");

    function fundoBranco(tema) {
      document.documentElement.style.setProperty("--branco-de-fundo", tema);
    }
    fundoBranco("#e6e6e6");
  }

  const [count, setCount] = useState(localStorage.getItem("Tema") || 0);
  

  useEffect(() => {
    if (localStorage.getItem("Tema")) {
      setCount(localStorage.getItem("Tema"));
    }
    loginLogout()
  }, []);

  useEffect(() => {
    localStorage.setItem("Tema", count);
    // eslint-disable-next-line
    if (count == 0) {
      modoWhite();
    } else {
      modoDark();
    }
  }, [count]);

  function mudarCor() {
    // eslint-disable-next-line
    if (count == 0) {
      setCount(1);
    } else {
      setCount(0);
    }
  }
  async function loginLogout() {
    let status = localStorage.getItem("statusLogin")
    let span = document.getElementById("loginLogout")
    if(status === "true"){
      span.innerHTML = "Sair"
    } else {
      span.innerHTML = "Entrar"
    }
  }
  async function loginLogoutClick() {
    let span = document.getElementById("loginLogout").innerText
    if (span === "Sair"){
      await logoutUsuario()
      let statusLogout = localStorage.getItem("statusLogin")
      console.log(statusLogout)
      if (statusLogout === 'false'){
        console.log("to vazando")
        navigate("/login")
        localStorage.clear()
      }
    } else {
      navigate("/entrar")
    }
  }

  return (
    <div className="links">
      <span id="loginLogout" className="link" onClick={loginLogoutClick}>
          Entre
      </span>
      <input className="input-check" type="checkbox" id="checkbox" />
      <label className="checkbox" htmlFor="checkbox">
        <svg
          onClick={() => mudarCor()}
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-circle-half"
          viewBox="0 0 16 16"
        >
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
        </svg>
      </label>
    </div>
  );
}

export default Connection;
