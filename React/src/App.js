import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

import Cadastro from './pages/Cadastro'
import Usuario from './pages/Usuario'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/cadastro' element={<Cadastro />} />
        <Route path='/usuario' element={<Usuario />} />
      </Routes>
    </Router>


  )
}

export default App
