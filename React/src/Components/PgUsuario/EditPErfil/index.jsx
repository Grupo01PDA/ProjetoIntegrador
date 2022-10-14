import "./index.css";
import FundoUser from "./fundo-user.png";

function EditPErfil() {

    return (
        <main class="main">
            <div class="info_perfil">
                <div class="perfil">
                    return <img src={FundoUser} alt="loading" />;
                    <div class="name_e-mail">
                        <h1>aaaa</h1>
                        <p>aaaaa</p>
                    </div>
                </div>

                <button class="button-edit" id="modalCadastro" type="button">Editar perfil</button>

                <div id="modalJanela" class="modal">
                    <div class="window">
                        <span id="fechar" class="fechar">&times;</span>
                        <form class="form">
                            <main class="modalMain">
                                <div class="coluna1">
                                    <div class="bloco">
                                        <label for="nome">Insira seu Nome:</label>
                                        <input class="modalInput" type="text" name="nome" id="nome" placeholder="Insira seu Nome" />
                                    </div>
                                    <div class="bloco">
                                        <label for="email">Insira seu email:</label>
                                        <input class="modalInput" type="email" name="email" id="email" placeholder="Insira seu Email" />
                                    </div>
                                </div>
                                <div class="coluna2">
                                    <div class="bloco">
                                        <label for="sobrenome">Insira seu Sobrenome:</label>
                                        <input class="modalInput" type="text" name="sobrenome" id="sobrenome" placeholder="Insira seu Sobrenome" />
                                    </div>
                                    <div class="bloco">
                                        <label for="grau">Selecione seu grau de escolaridade:</label>
                                        <select class="modalInput" name="grau" id="grau">
                                            <option value="1">Não conclui o Ensino Fundamental</option>
                                            <option value="2">Conclui o Ensino Fundamental, não conclui o Ensino Médio
                                            </option>
                                            <option value="3" selected>Conclui o Ensino Médio, não tenho Ensino Superior
                                            </option>
                                            <option value="4">Tenho Ensino Superior</option>
                                        </select>
                                    </div>
                                </div>
                            </main>
                            <div class="enviar">
                                <input class="botao-enviar" type="submit" value="Enviar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </main>

            )
    }
export default EditPErfil;