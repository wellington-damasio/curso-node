// Classes e classificação
// * Normalmente há várias entidades similares que podem ser abstraídas em um conteito único
// * Classe:
//    * Abstração dos atributos e dos métodos caracterizam entidades semelhantes
//    * Define o conjunto de entidades com os mesmos atributos e métodos 
//    * Descreve os atributos e os comportamentos de entidades similares

// Atributos vs Métodos (class Games = {})
//  * Atributos: 'titulo', 'genero', 'produtora', 'preço'
//  * Métodos: 'abrir', 'carregar', 'fechar', 'atualizar'

// Estrutura de class no JavaScript
class Game {

  // Atributos da class
  constructor(){
    this.title = ''
    this.genre = ''
    this.company = ''
    this.price = 0
  }

  // Métodos da class
  Abrir(){
    console.log('Jogo abrindo...')
  }

  Carregar(){
    console.log('Loading...')
  }

  Fechar(){
    console.log('Aperte ESC para fechar o game')
  }
}
// -------------------
//      Abstração
// --------------------
//  * Aspectos essenciais de um contexto qualquer
//  * Observar a realidade e dela abstrair entidades, ações e características consideradas essencias para uma aplicação
//  * O nivel de abstração de um mesmo objeto pode variar de sistema para sistema dependendo de suas necessidades

// Abstração do sistema de filmes da netflix (class Movies)
//  * Atributos: 'titulo', 'ano', 'sinopse', 'genero', 'diretor'
//  * Métodos: 'reproduzir', 'pausar', 'avançar', 'fechar'

class Movie {
  constructor(title, ano, genre, director, duration, actors){
    this.title = title ? title : '',
    this.ano = ano ? ano : 0,
    this.genre = genre ? genre : '',
    this.director = director ? director : '',
    this.duration = duration ? duration : 0,
    this.actors = actors? actors : []
  }

  Reproduzir() {
    console.log('reproduzir filme...')
  }

  Pausar() {
    console.log('pausa o filme...')
  }

  Avançar() {
    console.log('troca de filme ou episodio')
  }

  Fechar() {
    console.log('sair do atual filme para a tela Home')
  }

  Ficha(){
    console.log(`
  Titulo: ${this.title}
  Ano de lançamento: ${this.ano}
  Genero: ${this.genre}
  Diretor: ${this.director}
  Duração: ${this.duration} minutos
  Atores: ${this.actors != [] ? this.actors : ''}
    `)
  }
}

let vingadores = new Movie()
vingadores.title = 'Vingadores'
vingadores.director = 'Andrew Stuart'
console.log(vingadores.title)
console.log(vingadores.Reproduzir())
console.log(vingadores)

let oMascara = new Movie('O Mascara', 2004, 'Comédia', 'Steven Spielberg', 200)
console.log(oMascara)

oMascara.Ficha()


// -------------------
// Usando Composição
// -------------------
class Leitor{
  Ler(){
    console.log('lendo arquivo...')
  }
}

class Escritor{
  Escrever(){
    console.log('escrevendo arquivo')
  }
}

class Criador{
  Criar(){
    console.log('criando arquivo')
  }
}

class Destruidor{
  Destruir(){
    console.log('destruindo arquivo')
  }
}

class ManipuladorDeArquivos{
  constructor(nome) {
    this.arquivo = nome
    this.leitor = new Leitor()
    this.escritor = new Escritor()
    this.criador = new Criador()
    this.destruidor = new Destruidor()
  }
}

class GerenciadorDeUsuarios{
  constructor(){
    this.criador = new Criador()
    this.escritor = new Escritor()
  }

  SalvarListaDeUsuarios(lista){
    this.criador.Criar('usuarios.txt')
    this.escritor.Escrever('usuarios.txt', lista)
  }
}

// ------------------
//      Herança
// ------------------
class Animal{
  constructor(nome, idade, preco){
    this.nome = nome
    this.idade = idade
    this.preco = preco
  }

  checharEstoque(){
    return 10
  }

  OutroMetodo(){
    console.log('Este método faz parte da classe mãe')
  }
}

class Cachorro extends Animal{
  constructor(nome, idade, preco, raca, peso){
    // Pegando os valores pro prototype
    super(nome, idade, preco)

    this.raca = raca
    this.peso = peso
  }

  Latir(){
    console.log('Woof Woof')
  }

  ChecarEstoque(){
    console.log('Na loja temos 20 cachorros')
  }

  OutroMetodo(){
    console.log('Este metodo pertence a class Cachorro')
  }
}

let slash = new Cachorro('Slash', 3, 2000, 'Pultez', 3)

let animal = new Animal('Dragão', 123, 30000)

console.log(slash)
slash.Latir()

animal.OutroMetodo()
slash.OutroMetodo() 