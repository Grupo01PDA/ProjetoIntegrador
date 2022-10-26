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

   const testeNome = ''


 function cadastrando(){
    console.log(testeNome)

      console(apelidoRef, nomeRef, sobrenomeRef,escolaridadeRef,emailRef,senhaRef)
        axios.post("http://localhost:3000/usuario", {
            apelido: apelidoRef,
            nome: nomeRef,
            sobrenome: sobrenomeRef,
            escolaridade: escolaridadeRef,
            email: emailRef,
            senha: senhaRef
        }).then((res)=> console.log(res))
    }

    return (
<<<<<<< HEAD
        <div className='cadastro'>
            <h2>CAD00000000SE</h2>
            <form className="form" onSubmit={cadastrando}>
                <div className="cadastro_div">
                    <label for="apelido">Seu apelido</label>
                    <input className="input_cadastro" type="text" name="apelido" id="apelido"
                        placeholder="Digite seu apelido..." onChange={testeNome} ref={apelidoRef}/>
=======
        <div className='caixaInputs'>
            <h2>CADASTRE-SE</h2>
            <form className="cadastro" action="/cadastro" method="POST">
                <div className="inputs_div">
                    <label for="apelido">Seu apelido</label>
                    <input className="input_inputs" type="text" name="apelido" id="apelido"
                        placeholder="Digite seu apelido..." />
>>>>>>> 6c90ce34b82f4d16be3483a8bc9e1beea5958b50
                </div>
                <div className="inputs_div">
                    <label for="nome">Seu Nome</label>
<<<<<<< HEAD
                    <input className="input_cadastro" type="text" name="nome" id="nome" placeholder="Digite seu nome..." ref={nomeRef}/>
=======
                    <input className="input_inputs" type="text" name="nome" id="nome" placeholder="Digite seu nome..." />
>>>>>>> 6c90ce34b82f4d16be3483a8bc9e1beea5958b50
                </div>
                <div className="inputs_div">
                    <label for="sobrenome">Seu Sobrenome</label>
<<<<<<< HEAD
                    <input className="input_cadastro" type="text" name="sobrenome" id="sobrenome"
                        placeholder="Digite seu sobrenome..." ref={sobrenomeRef}/>
=======
                    <input className="input_inputs" type="text" name="sobrenome" id="sobrenome"
                        placeholder="Digite seu sobrenome..." />
>>>>>>> 6c90ce34b82f4d16be3483a8bc9e1beea5958b50
                </div>

                <div className="inputs_div">
                    <label for="escolaridade">Grau de escolaridade</label>
                    <select className="escolaridade" name="escolaridade" id="escolaridade" ref={escolaridadeRef}>
                        <option value="default">Selecione a opção em que você se encaixa</option>
                        <option value="1">Não conclui o ensino fundamental</option>
                        <option value="2">Conclui o ensino fundamental, não conclui o ensino médio</option>
                        <option value="3">Conclui o ensino médio, não tenho ensino superior</option>
                        <option value="4">Tenho ensino superior</option>
                    </select>
                </div>

                <div className="inputs_div">
                    <label for="email">Seu email</label>
<<<<<<< HEAD
                    <input className="input_cadastro" type="email" name="email" id="email"
                        placeholder="Digite seu email..." ref={emailRef} />
=======
                    <input className="input_inputs" type="email" name="email" id="email"
                        placeholder="Digite seu email..." />
>>>>>>> 6c90ce34b82f4d16be3483a8bc9e1beea5958b50
                </div>
                <div className="inputs_div">
                    <label for="senha">Sua senha</label>
<<<<<<< HEAD
                    <input className="input_cadastro" type="password" name="senha" id="senha"
                        placeholder="Digite sua senha..." ref={senhaRef} />
                </div>

                <div className="enviar-cadastro">
                    <button className="button" type="submit" >Cadastrar</button>
=======
                    <input className="input_inputs" type="password" name="senha" id="senha"
                        placeholder="Digite sua senha..." />
                </div>

                <div className="enviar-inputs">
                    <button className="button" type="submit">Cadastrar</button>
>>>>>>> 6c90ce34b82f4d16be3483a8bc9e1beea5958b50
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