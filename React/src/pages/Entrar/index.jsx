import "./index.css"

import HeaderEntrar from "../../Components/HeaderEntrar";

function Entrar(){
  return(
    <div>
      <HeaderEntrar />

      <main>
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
            <div className="imagem"></div>
        </div>

        <div className="frase">
            <div>
                <h2>Ensino online, gratuito, para todo mundo</h2>
            </div>
        </div>
        <div className="texto-fotos">
            <div className="texto-1">
                <h2>Aprenda várias matérias</h2>
                <br/>
                <p>Todas as matérias base e matérias extracurriculares em apenas um único lugar
                </p>

            </div>
            <div className="photo"></div>
        </div>
        <div className="texto-fotos">
            <div className="photo-1"></div>
            <div className="texto-2">
                <h2>Estude em qualquer lugar</h2>
                <br/>
                <p>Tudo que você precisa é conexão com a nossa plataforma,
                    a partir daí todo o conhecimento pode ser alcançado
                </p>
            </div>
        </div>
        <div className="photo-materias" />
      </main>
    </div>
  )
}

export default Entrar;