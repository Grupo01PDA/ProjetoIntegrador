import "./index.css";
import lottie from "lottie-web";

import HeaderEntrar from "../../Components/HeaderEntrar";
import { useEffect, useRef } from "react";
import Footer from "../../Components/Footer";

function Entrar() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./icon.json"),
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <div>
      <HeaderEntrar />

      <main className="Entrar">
        <div className="main">
          <div className="card">
            <div className="texto-botao">
              <div className="lorem">
                <h1>Conecte-se com milhões de pessoas</h1>
                <h3>Nossa ideia é propagar o ensino onde você estiver</h3>
              </div>
              <div>
                <a href="/cadastro">
                  <button className="botao-principal">COMEÇAR AGORA</button>
                </a>
              </div>
            </div>
            <div className="" ref={container}></div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Entrar;
