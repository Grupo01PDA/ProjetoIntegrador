import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Cadastro from './pages/cadastro'
/* import PgUsuario from './Components/Page-Usuario' */


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
{/*         <Route path="/usuario" element={<PgUsuario />} /> */}

      </Routes>
    </Router>


  )
}

export default App
