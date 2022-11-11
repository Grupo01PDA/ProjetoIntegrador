import Inputs from '../../Components/Inputs';           
import './index.css'

function Cadastro() {
    return (
        <main className='cadastro'>
            <a className='voltar' href='/'>
                <img className='simbolo_voltar' src="./images/setaDeVoltar.svg" alt="Seta para voltar" />
                 Voltar para a pagina inicial</a>
            <div className="texto-cadrasto">
                <h1>Pronto para <span> mudar</span>
                    <br /> sua vida?
                </h1>
            </div>
            <Inputs/>
        </main>
    );
}

export default Cadastro;