// Usuario de uma rede social
class User{
  constructor(){
    this.nome = '',
    this.sobrenome = '',
    this.username = '',
    this.profilePic = '', //url
    this.bio = ''
    this.idade = 0
    this.profissao = ''
    this.endereco = ''
    this.amigos = []
    this.amizadesPendentes = []
  }

  Postar(){
    console.log('fazer post de imagens, videos ou texto')
  }

  Curtir(){
    console.log('curtir posts de outros users')
  }

  Comentar(){
    console.log('comentar em posts de outros users')
  }

  Scroll(){
    console.log('passa pela interface de usuario vendo posts alheios')
  }
}