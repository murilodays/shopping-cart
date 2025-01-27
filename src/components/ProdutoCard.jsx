import "./ProdutoCard.css"
import { useContext } from "react"
import { ProdutosContext } from '../context/ProdutosContext'

const ProdutoCard = ({produto}) => {
  const {adicionarAoCarrinho} = useContext(ProdutosContext)

  return (
      <div className="card">
          
              <img src={produto.imagem} alt="" />
          
          <div className="card-body">
              <h3>{produto.nome} </h3>
              <h5>{produto.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h5>
              <button className="btn btn-sucess" onClick={() => adicionarAoCarrinho(produto.id)}>Adicionar ao carrinho</button>
          </div>
    </div>
  )
}

export default ProdutoCard