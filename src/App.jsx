import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ProdutosProvider } from "./context/ProdutosContext"
import Nav from './components/Nav'
import Cesta from './components/Cesta'
import Home from './components/Home'

function App() {


  return (
    <ProdutosProvider>
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cesta' element={<Cesta />} />
      </Routes> 
      </BrowserRouter>
      </ProdutosProvider>
  )
}

export default App
