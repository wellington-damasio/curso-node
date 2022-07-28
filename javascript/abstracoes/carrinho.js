// Carrinho de compras para loja
class Carrinho{
  constructor(){
    this.qtdDeProdutos = 0,
    this.custoFrete = 0,
    this.produtos = [],
    this.precoTotal = 0
  }

  Comprar(){
    console.log('compra todos os produtos que estão no carrinho')
  }

  Esvaziar(){
    console.log('deleta todos os produtos que estão no carrinho')
  }

  SalvarItens(){
    console.log('salva todos os itens que estão atualmente no carrinho em outra lista')
  }
}