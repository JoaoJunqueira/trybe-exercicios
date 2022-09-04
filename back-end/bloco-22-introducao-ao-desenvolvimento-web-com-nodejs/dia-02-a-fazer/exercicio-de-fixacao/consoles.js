const calculaSituacao = require('./examples/calculaSituacao');

console.log('Quando a média for menor que 7, retorna "reprovação":');

const respostaCenario1 = calculaSituacao(4);
if (respostaCenario1 === 'reprovação') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}

console.log('Quando a média for maior que 7, retorna "aprovação":');

const respostaCenario2 = calculaSituacao(9);
if (respostaCenario2 === 'aprovação') {
  console.log(`Ok 🚀`);
} else {
  console.error('Resposta não esperada 🚨');
}