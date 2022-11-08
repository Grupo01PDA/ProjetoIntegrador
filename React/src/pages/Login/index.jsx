import { useFormik} from 'formik';
import { basicSchema } from '../../schemas';
import axios from "axios";
import "./index.css";

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm()
    await axios.get('https://634b29e533bb42dca41161ad.mockapi.io/login/v1/users')
    .then(response => {
      if(values.email === response.data.email && values.password === response.data.senha){
        window.alert("Você está logado")
      }else{
        window.alert(`Usuário não existe`)
      }
    })
    .catch(error => console.log(error))
    
  };

function Login(){
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
                <h1>Conecte-se com <span className="loginSpan">milhões</span><br />
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
            <div>
              {errors.email && touched.email && <p className="error">{errors.email}</p>}
            </div>
          </div>

          <div className="formField">
            <label>Senha*</label>
            <input
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

          <div className="enviar-cadastro">
            <button disabled={isSubmitting} className="button" type="submit">Entrar</button>
          </div>
        </form>
            </div>
        </main>
    )
}

export default Login;