import "./Cesta.css"

import { useState, useContext } from "react"
import { ProdutosContext } from "../context/ProdutosContext"

const Cesta = () => {
  const {carrinho} = useContext(ProdutosContext)
  const {somarCarrinho, removerDoCarrinho} = useContext(ProdutosContext)
  const somaCarrinho = somarCarrinho()
  
  return (
    <div className="container-cesta">
      <h4>Valor total do carrinho: {somaCarrinho}</h4>
      <div className="itens-carrinho">
        {carrinho.map((item) => (
          <div className="item" key={item.id}>
            <div className="imagem-preview">
              <img src={item.imagem}  />
            </div>
            <div className="item-descricao">
              <h4>{item.nome}</h4>
              <span><strong>{item.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</strong></span>
              <span><strong>Quantidade: {item.quantidade}</strong></span>
              <button className='btn btn-danger' onClick={() => removerDoCarrinho(item.id)}>Deletar item</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Cesta