import { useFormik } from 'formik';
import { cadastroSchema } from '../../schemas/cadastroschema';
import React from 'react';
import axios from "axios"
import './index.css'

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
    await axios.get('https://634b29e533bb42dca41161ad.mockapi.io/login/v1/cadastro')
    .then(response => {
      if(values.email === response.data.email && values.password === response.data.senha){
        window.alert("Você está logado")
      }else{
        window.alert("Usuário não existe")
      }
    })
    .catch(error => console.log(error))
    
  };

function Inputs() {
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            apelido: 'imandrewslk',
            name: 'Andrew Klayver',
            email: 'aklayver@gmail.com',
            password: '#Andrew1311',
        },
        validationSchema: cadastroSchema,
        onSubmit,
        
    });

    const apelidoRef = React.useRef();
    const nomeRef = React.useRef();
    const sobrenomeRef = React.useRef();
    const escolaridadeRef = React.useRef();
    const emailRef = React.useRef();
    const senhaRef = React.useRef();

    const testeNome = ''


    function cadastrando() {
        console.log(testeNome)

        console(apelidoRef, nomeRef, sobrenomeRef, escolaridadeRef, emailRef, senhaRef)
        axios.post("http://localhost:3000/usuario", {
            apelido: apelidoRef,
            nome: nomeRef,
            sobrenome: sobrenomeRef,
            escolaridade: escolaridadeRef,
            email: emailRef,
            senha: senhaRef
        }).then((res) => console.log(res))
    }

    return (
        <div className='caixaInputs'>
            <h2>CADASTRE-SE</h2>
            <form className="cadastro" action="/cadastro" method="POST">
                <div className="inputs_div">
                    <label for="apelido">Seu apelido</label>
                    <input className="input_inputs"               
                        id="apelido"
                        type="apelido"
                        placeholder="Digite seu apelido..."
                        onChange={handleChange}
                        value={values.apelido}
                        onBlur={handleBlur} />
                <div>
                {errors.apelido && touched.apelido && <p className="error">{errors.apelido}</p>}
                </div>
                </div>
                
                <div className="inputs_div">
                    <label for="nome">Seu Nome</label>
                    <input className="input_inputs"               
                        id="name"
                        type="name"
                        placeholder="Digite seu nome..."
                        onChange={handleChange}
                        value={values.name}
                        onBlur={handleBlur} />
                </div>
                {errors.name && touched.name && <p className="error">{errors.name}</p>}
                <div className="inputs_div">
                    <label for="sobrenome">Seu Sobrenome</label>
                    <input className="input_inputs" type="text" name="sobrenome" id="sobrenome"
                        placeholder="Digite seu sobrenome..." />
                </div>

                <div className="inputs_div">
                    <label for="escolaridade">Grau de escolaridade</label>
                    <select className="escolaridade" name="escolaridade" id="escolaridade">
                        <option value="default">Selecione a opção em que você se encaixa</option>
                        <option value="1">Não conclui o ensino fundamental</option>
                        <option value="2">Conclui o ensino fundamental, não conclui o ensino médio</option>
                        <option value="3">Conclui o ensino médio, não tenho ensino superior</option>
                        <option value="4">Tenho ensino superior</option>
                    </select>
                </div>

                <div className="inputs_div">
                    <label for="email">Seu email</label>
                    <input className="input_inputs"               
                        id="email"
                        type="email"
                        placeholder="Digite seu email..."
                        onChange={handleChange}
                        value={values.email}
                        onBlur={handleBlur} />
               <div>
               {errors.email && touched.email && <p className="error">{errors.email}</p>}
               </div>
                </div>
              
                <div className="inputs_div">
                    <label for="senha">Sua senha</label>
                    <input className="input_inputs"                  
                         id="password"
                        type="password"
                        placeholder="Digite sua senha..."
                        onChange={handleChange}
                        value={values.password}
                        onBlur={handleBlur} />
                <div>
              {errors.password && touched.password && <p className="error">{errors.password}</p>}
            </div>
                </div>

                <div className="enviar-inputs">
                <button disabled={isSubmitting} className="button" type="submit">Entrar</button>
                    <div class="link-login">
                        <br />Já tem uma conta?
                        <a href="/login">Acesse</a>
                    </div>
                </div>

            </form>
        </div>
    )
};

export default Inputs;
