// Personagem para jogo de RPG
class Personagem{
  constructor(){
    this.nome = '',
    this.sobrenome = '',
    this.classe = '',
    this.armaPrincipal = '',
    this.armaSecundaria = '',
    this.nivelDeXP = 0,
    this.pontosDeHabilidade = 0,
    this.magias = []
  }

  MoverParaFrente() {
    console.log('move o personagem para frente')
  }

  MoverParaTras() {
    console.log('move o personagem para tras')
  }

  MoverParaDireita() {
    console.log('move personagem para direita')
  }

  MoverParaEsquerda() {
    console.log('move personagem para esquerda')
  }

  Golpear() {
    console.log('personagem ataca com sua arma principal')
  }

  UsarMagia() {
    console.log('escolha uma de suas magias e use-a')
  }

  Correr() {
    console.log('4 movimentos espaciais basicos, mas rapido')
  }

  Pular() {
    console.log('personagem dá um salto')
  }
}