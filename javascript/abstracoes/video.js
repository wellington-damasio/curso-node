// Video para seviço de streaming
class Video{
  constructor(){
    this.title = '',
    this.duration = 0, //minutes
    this.numberOfViews = 0,
    this.comments = [],
    this.recommendations = [],
    this.subtitles = '',
    this.configurations = [{}]
  }

  Configurar(){
    console.log('mexer nas configurações de qualidade e visualização do video')
  }

  Play(){
    console.log('visualizar video')
  }

  Pause(){
    console.log('pausar video')
  }

  Proximo(){
    console.log('ir para proximo video da lista')
  }

  AcelerarVelocidade(){
    console.log('acelerar velocidade do video')
  }

  AtivarLegendas(){
    console.log('ativa legendas do video para certas línguas')
  }

  TelaCheia(){
    console.log('ativa modo de visualização em tela cheia ')
  }
}