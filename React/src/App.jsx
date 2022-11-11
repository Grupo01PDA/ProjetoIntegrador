import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Cadastro from './pages/Cadastro'
import Entrar from './pages/Entrar'
import PgUsuario from './pages/PgUsuario'
import Login from './pages/Login'
import Comunidade from './pages/Comunidade'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } exact />
        <Route path='/cadastro' element={ <Cadastro /> } />
        <Route path='/comunidade' element={ <Comunidade />}/>
        <Route path='/entrar' element={ <Entrar /> } />
        <Route path='/usuario' element={ <PgUsuario /> } />
        <Route path='/login' element={ <Login /> } />
      </Routes>
    </Router>
  )
}

export default App;
