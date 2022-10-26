import "./Index.css"

function Inputs(){
    return (
        
        <div className='cadastro'>
        <h2>CONECTE-SE</h2>
        <form className="form" action="/login" method="POST">
           
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
                    <br />Ainda não tem uma conta?
                    <a href="/cadastro">Faça seu cadastro</a>
                </div>
            </div>

        </form>
    </div>
       
    );
}

export default Inputs;