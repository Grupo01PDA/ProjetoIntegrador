import "./index.css";

function EditPErfil() {
    return (
        <div className="usuarioEdit">
            <div className="info_perfil" alt="loading">
                <div className="perfil">
                    <img src="./images/IconUser.png" alt="loading"/>
                    <div className="name_e-mail">
                        <h1>{localStorage.getItem("apelido")}</h1>
                        <p>{localStorage.getItem("nome")}</p>
                    </div>
                </div>
                <button className="button-edit" id="modalCadastro" type="button">Editar perfil</button>

                <div id="modalJanela" className="modal">
                    <div className="window">
                        <span id="fechar" className="fechar">&times;</span>
                        <form className="editPerfil">
                            <main className="modalMain">
                                <div className="coluna1">
                                    <div className="bloco">
                                        <label htmlFor="nome">Insira seu Nome:</label>
                                        <input className="modalInput" type="text" name="nome" id="nome" placeholder="Insira seu Nome"/>
                                    </div>
                                    <div className="bloco">
                                        <label htmlFor="email">Insira seu email:</label>
                                        <input className="modalInput" type="email" name="email" id="email" placeholder="Insira seu Email"/>
                                    </div>
                                </div>
                                <div className="coluna2">
                                    <div className="bloco">
                                        <label htmlFor="sobrenome">Insira seu Sobrenome:</label>
                                        <input className="modalInput" type="text" name="sobrenome" id="sobrenome" placeholder="Insira seu Sobrenome"/>
                                    </div>
                                    <div className="bloco">
                                        <label htmlFor="grau">Selecione seu grau de escolaridade:</label>
                                        <select className="modalInput" name="grau" id="grau">
                                            <option value="1">Não conclui o Ensino Fundamental</option>
                                            <option value="2">Conclui o Ensino Fundamental, não conclui o Ensino Médio
                                            </option>
                                            <option value="3">Conclui o Ensino Médio, não tenho Ensino Superior
                                            </option>
                                            <option value="4">Tenho Ensino Superior</option>
                                        </select>
                                    </div>
                                </div>
                            </main>
                            <div className="enviar">
                                <input className="botao-enviar" type="submit" value="Enviar"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default EditPErfil;