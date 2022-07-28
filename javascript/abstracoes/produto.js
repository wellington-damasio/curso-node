// Produto para loja
class Produto{
  constructor() {
    this.nome = '',
    this.marca = '',
    this.preco = 0,
    this.dataDeValidade = '',
    this.emPromocao = false
    this.categoria = ''
  }

  Comprar(){
    console.log('compra o produto')
  }

  ColocarNoCarrinho(){
    console.log('coloca o produto no carrinho de compras')
  }

  AumentarQtd(){
    console.log('aumenta a qtd de unidades do produto a ser comprada')
  }

  DiminuirQtd() {
    console.log('diminui a qtd de unidades do produto a ser comprada')
  }
}