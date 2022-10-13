import "./Index.css";

function Login(){
    return(
        <main className="main">
        <div className="texto-cadrasto">
        <h1>Conecte-se com <span>milhões</span><br>
            de pessoas em todo o país</h1>

        </div>
        <div className="cadastro">
        <h2>CONECTE-SE</h2>
        <form action="/login" method="POST" class="form">
            <div className="cadastro_div">
                <label className="label_cadastro" for="email">Email:</label>
                <input className="input_cadastro" type="email" name="email" id="email" placeholder="Digite seu email...">
            </div>
            <div className="cadastro_div">
                <label class="label_cadastro" for="senha">Senha:</label>
                <input class="input_cadastro" type="password" name="senha" id="senha" placeholder="Digite sua senha...">
            </div>


            <div className="botao">
                <button className="button" type="submit">Conectar</button>
                <div className="link-login">
                    Ainda não tem conta?<br>
                    <a href="/cadastro">Faça seu cadastro</a>
                </div>
            </div>
        </form>
    </div>
</main>
    )
}

export default Login;