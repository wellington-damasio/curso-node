class Dado{
  constructor(nmrDeFaces){
    this.nmrDeFaces = nmrDeFaces ? nmrDeFaces : 0
  }

  Rolar() {
    // Math.floor(Math.random() * (max - min + 1) + min) onde:
    // max = nmrDeFaces, min = 1
    let randomNumber = Math.floor(Math.random() * (this.nmrDeFaces - 1 + 1) + 1)

    console.log(randomNumber)
  }
}

let d6 = new Dado(6)
let d10 = new Dado(10)
let d8 = new Dado(8)
let d20 = new Dado(20)

console.log(
  d6.Rolar(),
  d10.Rolar(),
  d8.Rolar(),
  d20.Rolar()
)