import "./index.css";

function Login(){
    return(
        <main className="login">
             <a className='voltar' href='/'>
                <img src="./images/setaDeVoltar.svg" alt="Seta para voltar" />
                 Voltar para a pagina inicial</a>
            <div className="texto-login">
                <h1>Conecte-se com <span className="loginSpan">milhões</span><br />
                    de pessoas em todo o país</h1>
            </div>
            <div className="caixaLogin">
                <h2 className="spanConecte">CONECTE-SE</h2>
                <form action="/login" method="POST" class="form">
                    <div className="login_div">
                        <label className="label_login" for="email">Email:</label>
                        <input className="input_login" type="email" name="email" id="email" placeholder="Digite seu email..." />
                    </div>
                    <div className="login_div">
                        <label class="label_login" for="senha">Senha:</label>
                        <input class="input_login" type="password" name="senha" id="senha" placeholder="Digite sua senha..." />
                    </div>
                    <div className="botaoLogin">
                        <button className="buttonLogin" type="submit">Conectar</button>
                        <div className="link-login">
                            Ainda não tem conta?<br />
                            <a href="/cadastro">Faça seu cadastro</a>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default Login;