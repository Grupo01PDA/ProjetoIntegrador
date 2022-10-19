import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'
import Cadastro from './pages/cadastro'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> } exact />
        <Route path='/cadastro' element={ <Cadastro /> } />
      </Routes>
    </Router>
  )
}

export default App;
