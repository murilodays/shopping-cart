import './Nav.css'
import { NavLink } from "react-router-dom"
import { useContext } from 'react'
import { ProdutosContext } from '../context/ProdutosContext'

const Nav = () => {
  const {somarCarrinho} = useContext(ProdutosContext)
  const somaCarrinho = somarCarrinho()
  return (
    <div id="nav">
      <NavLink id='pageTitle' to='/'>
        <h2>Loja de Notebook</h2>
      </NavLink>
      
      <div className={'navLink'}>
        <NavLink to="/cesta" >
          CARRINHO
          <p><strong>{somaCarrinho ? somaCarrinho : 0}</strong></p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default Nav