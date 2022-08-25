const modules = require('./brlValue');

const convert = modules.usdToBrl;

const usd = 10;

const brl = convert(usd);

console.log(brl);