import './index.css'

function Inputs() {
    return (
        <div className='cadastro'>
            <h2>CADASTRE-SE</h2>
            <form className="form" action="/cadastro" method="POST">
                <div className="cadastro_div">
                    <label for="apelido">Seu apelido</label>
                    <input className="input_cadastro" type="text" name="apelido" id="apelido"
                        placeholder="Digite seu apelido..." />
                </div>
                <div className="cadastro_div">
                    <label for="nome">Seu Nome</label>
                    <input className="input_cadastro" type="text" name="nome" id="nome" placeholder="Digite seu nome..." />
                </div>
                <div className="cadastro_div">
                    <label for="sobrenome">Seu Sobrenome</label>
                    <input className="input_cadastro" type="text" name="sobrenome" id="sobrenome"
                        placeholder="Digite seu sobrenome..." />
                </div>

                <div className="cadastro_div">
                    <label for="escolaridade">Grau de escolaridade</label>
                    <select className="escolaridade" name="escolaridade" id="escolaridade">
                        <option value="default">Selecione a opção em que você se encaixa</option>
                        <option value="1">Não conclui o ensino fundamental</option>
                        <option value="2">Conclui o ensino fundamental, não conclui o ensino médio</option>
                        <option value="3">Conclui o ensino médio, não tenho ensino superior</option>
                        <option value="4">Tenho ensino superior</option>
                    </select>
                </div>

                <div className="cadastro_div">
                    <label for="email">Seu email</label>
                    <input className="input_cadastro" type="email" name="email" id="email"
                        placeholder="Digite seu email..." />
                </div>
                <div className="cadastro_div">
                    <label for="senha">Sua senha</label>
                    <input className="input_cadastro" type="password" name="senha" id="senha"
                        placeholder="Digite sua senha..." />
                </div>

                <div className="enviar-cadastro">
                    <button className="button" type="submit">Cadastrar</button>
                    <div class="link-login">
                        <br />Já tem uma conta?
                        <a href="/login">Acesse</a>
                    </div>
                </div>

            </form>
        </div>
    );
}

export default Inputs;