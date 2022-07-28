function sum(a, b) {
  return a + b
}

function sub(a, b) {
  return a - b
}

function div(a, b) {
  return a / b
}

function mult(a, b) {
  return a * b
}

// Podemos, agora, acessar a função 'sum' em qualquer parte do programa
// module.exports = sum

module.exports = {
  sum,
  div,
  mult,
  sub
}