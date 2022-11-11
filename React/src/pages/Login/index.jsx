import { useFormik} from 'formik';
import { basicSchema } from '../../schemas';
import loginUsuario from "../../services/loginUsuario"
import "./index.css";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Login(){
  const navigate = useNavigate();
  const [ status, setStatus ] = useState(localStorage.getItem("statusLogin") || "false");

  useEffect(() => {
    if (localStorage.getItem("statusLogin")) {
      setStatus(localStorage.getItem("statusLogin"))
    }
  }, [])

  useEffect(() =>{
    localStorage.setItem("statusLogin", status);
    console.log(status)
  }, [status])
  

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
    await loginUsuario(values)
    if(localStorage.getItem("statusLogin") === 'true') {
      navigate("/")
    } else {
      alert("não deu certo")
    }
  }

  const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: {
          email: '',
          password: '',
        },
        validationSchema: basicSchema,
        onSubmit,
      });


    return(
        <main className="login">
             <a className='voltar' href='/'>
                <img src="./images/setaDeVoltar.svg" alt="Seta para voltar" />
                 Voltar para a pagina inicial</a>
            <div className="texto-login">
                <h1>Conecte-se com <span className="loginSpan">milhares</span><br />
                    de pessoas em todo o país</h1>
            </div>
            <div className="caixaLogin">
                <h2 className="spanConecte">CONECTE-SE</h2>
                
       <form onSubmit={handleSubmit} autoComplete="off" className="form" >
          <div className="formField">
            <label>Email*</label>
            <input
              id="email"
              type="email"
              placeholder="Digite seu email..."
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur} />
          </div>
          {errors.email && touched.email && <p className="error">{errors.email}</p>}
          <div className="formField">
            <label>Senha*</label>
            <input
              id="password"
              type="password"
              placeholder="Digite sua senha..."
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur} />
          </div>
          {errors.password && touched.password && <p className="error">{errors.password}</p>}
          <div className="enviar-cadastro">
            <button disabled={isSubmitting} className="button" type="submit">Entrar</button>
          </div>
          <span>Ainda não tem cadastro? <a href="/cadastro">Clique Aqui</a></span>
        </form>
            </div>
        </main>
    )
}

export default Login;