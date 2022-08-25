// Uso do require (pt-br) / 'require' use (en-us)

const { brl, usdToBrl } = require('./brlValue');

const usd = 10;

console.log(`Valor do dólar: ${brl}`);
console.log(`Dez dólares em reais: ${usdToBrl(usd)}`);