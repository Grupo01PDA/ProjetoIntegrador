import React from 'react';
import axios from "axios"
import './index.css'


function Inputs() {

   const apelidoRef = React.useRef();
   const nomeRef = React.useRef();
   const sobrenomeRef = React.useRef();
   const escolaridadeRef = React.useRef();
   const emailRef = React.useRef();
   const senhaRef = React.useRef();


  async function cadastrando(){
      console(apelidoRef, nomeRef, sobrenomeRef,escolaridadeRef,emailRef,senhaRef)
       await axios.post("http://localhost:3000/usuario", {
            apelido: apelidoRef,
            nome: nomeRef,
            sobrenome: sobrenomeRef,
            escolaridade: escolaridadeRef,
            email: emailRef,
            senha: senhaRef
        }).then((res)=> console.log(res))
    }

    return (
        <div className='cadastro'>
            <h2>Chjkhhkhjh  -SE</h2>
            <form className="form"  method="POST" onSubmit={cadastrando}>
                <div className="cadastro_div">
                    <label for="apelido">Seu apelido</label>
                    <input className="input_cadastro" type="text" name="apelido" id="apelido"
                        placeholder="Digite seu apelido..." ref={apelidoRef}/>
                </div>
                <div className="cadastro_div">
                    <label for="nome">Seu Nome</label>
                    <input className="input_cadastro" type="text" name="nome" id="nome" placeholder="Digite seu nome..." ref={nomeRef}/>
                </div>
                <div className="cadastro_div">
                    <label for="sobrenome">Seu Sobrenome</label>
                    <input className="input_cadastro" type="text" name="sobrenome" id="sobrenome"
                        placeholder="Digite seu sobrenome..." ref={sobrenomeRef}/>
                </div>

                <div className="cadastro_div">
                    <label for="escolaridade">Grau de escolaridade</label>
                    <select className="escolaridade" name="escolaridade" id="escolaridade" ref={escolaridadeRef}>
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
                        placeholder="Digite seu email..." ref={emailRef} />
                </div>
                <div className="cadastro_div">
                    <label for="senha">Sua senha</label>
                    <input className="input_cadastro" type="password" name="senha" id="senha"
                        placeholder="Digite sua senha..." ref={senhaRef} />
                </div>

                <div className="enviar-cadastro">
                    <button className="button" type="submit" >Cadastrar</button>
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