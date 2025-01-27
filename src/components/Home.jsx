import './Home.css'

import { useContext } from 'react'
import { ProdutosContext } from '../context/ProdutosContext'
import ProdutoCard from './ProdutoCard'

const Home = () => {
  const {produtos} = useContext(ProdutosContext)

  return (
    <>
      <h3 className='title'>Produtos da loja</h3>
      <hr />
      <div className='container'>
        {produtos.map((produto) => (
          <ProdutoCard key={produto.id} produto={ produto } />
        ))} 
        </div>
    </>
  )
}

export default Home