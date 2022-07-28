// Find: achar um único registro dentro de um array
let users = [
  {
    nome: 'Wellington',
    idade: 19,
    netWorth: 'R$1.500.000,00'
  }, 
  {
    nome: 'Samantha',
    idade: 17,
    netWorth: 'R$200.000,00'
  },
  {
    nome: 'Carol',
    idade: 26,
    netWorth: 'R$1.000.000,00'
  },
  {
    nome: 'Jaqueline',
    idade: 34,
    netWorth: 'R$500.000,00'
  }, 
  {
    nome: 'Jéssica',
    idade: 21,
    netWorth: 'R$20.000,00'
  }
]


function getGf(gfName) {
  return users.find(user => user.nome === gfName)
}

function getWealthier(users) {
  const usersNetworth = []

  users.forEach(user => {
    let netWorth = user.netWorth
      .split('')
      .filter(char => {
        let conditions = char !== 'R' && char !== '$' 
          && char !== '.' && char !== ','

        return conditions
      })
      .join('')

      usersNetworth.push({nome: user.nome, netWorth: netWorth})
  })

  let wealthier = usersNetworth[0]

  for(let user of usersNetworth) {
    if(Number(user.netWorth) > Number(wealthier.netWorth)) {
      wealthier = user
    }
  }
  
  return wealthier.nome
}

let girlfriend = getGf('Samantha')
let gfName = girlfriend ? girlfriend.nome : 
  'Tem certeza que você tem uma namorada?'

let secondGirlfriend = getGf('Camila')
let secondGfName = secondGirlfriend ? secondGirlfriend.nome :
  'Tem certeza que você tem essa namorada?'

console.log('gf name: ' + gfName)

console.log('second gf name: ' + (secondGfName))

console.log('wealthier: ' + getWealthier(users))
