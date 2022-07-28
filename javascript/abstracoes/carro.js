// Carro para sistema de aluguel de carros
class Carro{
  constructor(){
    this.nome = '',
    this.marca = '',
    this.cor = '',
    this.motor = '',
    this.cambio = '',
    this.nmrDePortas = 0,
    this.edicao = '',
    this.quilometragem = 0,
    this.combustiveis = [] //Quais combustiveis o carro aceita
  }

  Comprar(){
    console.log('comprar carro')
  }

  OlharDetalhes(){
    console.log('ver informações adicionais do carro')
  }

  SimularFinanciamento(){
    console.log('simula financiamento do carro com banco especifico')
  }
}