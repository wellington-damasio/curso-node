// Programação síncrona:
//  Tudo é executado na ordem de chamada
//  Para o processo 'b' começar, tem de terminar o processo 'a', e etc

// O problema da programaçao assíncrona
//  Diferentes processos nas aplicações levem tempos diferentes para serem concluidos. Por examplo, envio de e-mails que demora segundos comparado com milissegundos da maioria dos processos me um app.
//  Quando utilizamos o paradigma síncrono para nosso código, isto pode significar que tarefas poderão ficar 'travadas' por outras.
//  ex: o carregamento de uma nova página pode ficar congestionado por um processo de manipulação de arquivos que ainda não terminou

// Programação Assíncrona
//  Tudo é executado ao mesmo tempo, ou seja, não precisamos esperar um processo 'a' acabar de ser executado para execurtarmos o processo 'b'

// Existem 3 maneiras de usar assincronismo no JavaScript
//   Callbacks()
//   Promises()
//   async/await

// Exemplo de callback com envio de email
function sendEmail(to, by, sentMsg) {
  // Simulando um envio que demoraria 5 segundos
  setTimeout(() => {
    console.log(`
    Para: ${to}
    -----------------------------------
    Olá, meu amigo! Tudo bem??
    -----------------------------------
    De: ${by}
    `)

    sentMsg('OK', '8s')
  }, 5000)
}


console.log('Inicio do processo de envio de email')

sendEmail('Miguel', 'Juan', (status, sendingTime) => {
  console.log('Mensagem enviada com sucesso')
  console.log('Status: ' + status)
  console.log('Tempo de envio: ' + sendingTime)
})

console.log('Estamos tentando enviar seu email')


// TRABALHANDO COM PROMISES
function enviarEmail(corpo, para) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let erro = 0

      if(!erro) {
        resolve({msg: 'Email enviado com sucesso', corpo: corpo, para: para})
      } else {
        reject("Deu merda...")
      }
    }, 3500)
  })
}

enviarEmail('Ola tudo bem... Eu to bebado', 'Camila')
  .then( ({msg, corpo, para}) => console.log(`
  Para: ${para}
  ----------------------------------
  ${corpo}
  ----------------------------------

  ${msg}
  `))
  .catch( erro => console.log(erro)) 

// ASYNC/AWAIT
function getUsers() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {name: 'Wellington', idade: 19, lang: 'JavaScript'},
        {name: 'Maria', idade: 21, lang: 'Java'},
        {name: 'José', idade: 11, lang: 'Scratch'},
        {name: 'Mario', idade: 19, lang: 'C#'},
        {name: 'Italo', idade: 25, lang: 'C++'}
      ])
    }, 5500)
  })
}

// getUsers().then(users => console.log(users))

async function principal() {
  let usuarios = await getUsers() //Bloqueia código posterior
  console.log(usuarios)
}

principal()