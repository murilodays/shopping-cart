import { createContext, useState } from "react"
import produtosData from "../data/produtos"

export const ProdutosContext = createContext()

export const ProdutosProvider = ({children}) => {
  const [produtos] = useState(produtosData)
  const [carrinho, setCarrinho] = useState([])
  
  const adicionarAoCarrinho = (idProduto) => {
    const produtoEncontrado = produtos.find((item) => item.id === idProduto)
    
    if (!produtoEncontrado) return

    setCarrinho((prevCarrinho) => {
      const produtoJaExiste = prevCarrinho.find((item) => item.id === idProduto)

      if (produtoJaExiste) {
        return prevCarrinho.map((item) =>
          item.id === idProduto ? {...item, quantidade: item.quantidade + 1} : item
        )
      } else {
        return [...prevCarrinho, {...produtoEncontrado, quantidade: 1}]
      }
    });
  };

  const removerDoCarrinho = (idProduto) => {
    const produtoEncontrado = produtos.find((item) => item.id === idProduto)
    
    if (!produtoEncontrado) return

    setCarrinho((prevCarrinho) => {
      return prevCarrinho.filter((item) => item.id != idProduto)
    })
  }

  const somarCarrinho = () => {
    const soma = carrinho.reduce((soma, itemCarrinho) => {
      return soma + (itemCarrinho.preco * itemCarrinho.quantidade)
    }, 0)

    return soma.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  }

  return (
    <ProdutosContext.Provider value={{produtos, carrinho, adicionarAoCarrinho, somarCarrinho, removerDoCarrinho}}>
        {children}
    </ProdutosContext.Provider>
  )
}

