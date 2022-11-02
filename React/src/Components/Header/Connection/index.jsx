import "./index.css";
import { useState } from "react";

function Connection() {


  function modoDark() {

    function brancoPreto(tema) {
      document.documentElement.style.setProperty('--preto-base', tema)
    }

    brancoPreto('#f0f0f0');

    function brancoBase(tema) {
      document.documentElement.style.setProperty('--branco-base', tema)
    }
    brancoBase('#0f0f0f');

    function brancoFundo(tema) {
      document.documentElement.style.setProperty('--branco-de-fundo', tema)
    }
    brancoFundo('#1b1b1b');


  }

  function modoWhite() {
    function setColo(tema) {
      document.documentElement.style.setProperty('--preto-base', tema)
    }

    setColo('#0f0f0f');

    function brancoBase(tema) {
      document.documentElement.style.setProperty('--branco-base', tema)
    }
    brancoBase('#f0f0f0');

    function fundoBranco(tema) {
      document.documentElement.style.setProperty('--branco-de-fundo', tema)
    }
    fundoBranco('#e6e6e6');
  }

  const [count, setCount] = useState(0)

  console.log(count)


  function mudarCor() {

    if (count === 0) {
      modoDark();
      setCount(count + 1)
    }
    else {
      modoWhite();
      setCount(0)
    }
  }
  return (
    <div className="links">
      <a className="link" href="/entrar">Entre</a>

      <input className="input-check" type="checkbox" id="checkbox" />
      <label class="checkbox" for="checkbox">
        <svg onClick={() => mudarCor()} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
        </svg>
      </label>
    </div>
  )
}

export default Connection;
