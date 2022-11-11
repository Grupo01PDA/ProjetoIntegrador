import clearInput from "../../js/clearInput"
import validacaoDeUsuario from "../../js/validacaoDeUsuario"
import { React, useState, useEffect } from 'react';
import banco from "../../services/urlBase"
import { useNavigate } from "react-router-dom";
import './index.css'


function Inputs() {
  const [ formValues, setFormValues ] = useState({});
  const navigate = useNavigate();

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const cadastrar = async(event) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    const data = Object.fromEntries(formData)
    await validacaoDeUsuario(data)
    if (localStorage.getItem("statusLogin") === "true"){
      navigate("/")
    }
  }
  useEffect(() => {
    async function validacao() {
      await banco
        .get("/rankings/global")
        .then((res) => res.data.Allusers)
        .then((users) => {
          // eslint-disable-next-line
          users.map(function (usuario) {
            let mensagem;
            if (usuario.apelido === formValues.apelido) {
              mensagem = "Esse apelido já está em uso, por favor coloque outro";
              clearInput("apelido");
              formValues.apelido = "";
              return alert(mensagem);
            }
            if (usuario.email === formValues.email) {
              mensagem = "Esse email já está em uso, por favor coloque outro";
              clearInput("email");
              formValues.email = "";
              return alert(mensagem);
            }
          });
        })
        .catch((error) =>
          console.log("desculpe, encontramos um erro: ", error)
        );
    }
    validacao();
  }, [formValues]);

  return (
    <div className="caixaInputs">
      <h2>CADASTRE-SE</h2>
      <form className="form" onSubmit={cadastrar}>
        <div className="inputs_div">
          <label htmlFor="apelido">Seu apelido</label>
          <input
            className="input_inputs"
            type="text"
            name="apelido"
            onChange={inputChange}
            id="apelido"
            placeholder="Digite seu apelido..."
          />
        </div>
        <div className="inputs_div">
          <label htmlFor="nome">Seu Nome</label>
          <input
            className="input_inputs"
            type="text"
            name="nome"
            onChange={inputChange}
            id="nome"
            placeholder="Digite seu nome..."
          />
        </div>
        <div className="inputs_div">
          <label htmlFor="sobrenome">Seu Sobrenome</label>
          <input
            className="input_inputs"
            type="text"
            name="sobrenome"
            onChange={inputChange}
            id="sobrenome"
            placeholder="Digite seu sobrenome..."
          />
        </div>

        <div className="inputs_div">
          <label htmlFor="escolaridade">Grau de escolaridade</label>
          <select
            className="escolaridade"
            onChange={inputChange}
            name="escolaridade"
            id="escolaridade"
          >
            <option value="default">
              Selecione a opção em que você se encaixa
            </option>
            <option value="1">Não conclui o ensino fundamental</option>
            <option value="2">
              Conclui o ensino fundamental, não conclui o ensino médio
            </option>
            <option value="3">
              Conclui o ensino médio, não tenho ensino superior
            </option>
            <option value="4">Tenho ensino superior</option>
          </select>
        </div>

        <div className="inputs_div">
          <label htmlFor="email">Seu email</label>
          <input
            className="input_inputs"
            type="email"
            name="email"
            onChange={inputChange}
            id="email"
            placeholder="Digite seu email..."
          />
        </div>
        <div className="inputs_div">
          <label htmlFor="senha">Sua senha</label>
          <input
            className="input_inputs"
            type="password"
            name="senha"
            onChange={inputChange}
            id="senha"
            placeholder="Digite sua senha..."
          />
          <img src="../../../" alt="" />
        </div>

        <div className="enviar-inputs">
          <button className="buttom" type="submit">
            Cadastrar
          </button>
          <div className="link-login">
            <br />
            Já tem uma conta?
            <a href="/login">Acesse</a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Inputs;
