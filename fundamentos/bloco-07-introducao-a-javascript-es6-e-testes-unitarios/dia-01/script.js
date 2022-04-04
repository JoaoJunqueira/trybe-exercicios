// Exercício do dia

// Parte 1.1 

// Função inicial

function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = ifScope + " ótimo, fui utilizada no escopo !";
    console.log(ifScope);
  } else {
    var elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
  console.log(ifScope + " o que estou fazendo aqui ? :O"); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// Função modificada

const extra = ` ótimo, fui utilizada no escopo !`; // mensagem que era adicionada quando vazava escopo
testingScope = (escopo) =>
  escopo === true
    ? (ifScope = `Não devo ser utilizada fora do meu escopo (if)${extra}`)
    : (ifScope = "Não devo ser utilizada fora meu escopo (else)");
testingScope(true);
console.log(ifScope);

// Parte 1.2

// https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-array-e-loop-for/3d453622-6c99-46af-a884-fecc68811230/exercicios/f93175b8-64ca-4d6a-b702-55fbbb579341/bonus/ac2ab0aa-3f26-48e7-818a-956b56ca3f97?use_case=side_bar

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
function organiza(array) {
  for (let i = 1; i < array.length; i += 1){
    for (let j = 0; j < i; j += 1) {
      if(array[i] < array[j]){
        let aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }        
    }
  }
  return array;
}
console.log(organiza(oddsAndEvens)); // será necessário alterar essa linha 😉

// Parte 2.1

// http://devfuria.com.br/logica-de-programacao/recursividade-fatorial/

const n = 4;
let fatorial = 1;
const fatoracao = n => ( n != 0 ) ? ( n * fatoracao( n - 1 )) : 1;
console.log(fatoracao(n));

// Parte 2.2

// https://www.w3schools.com/jsref/jsref_split.asp

const frase = 'Antônio foi no banheiro e não sabemos o que aconteceu';
const longestWord = frase => {
  const palavras = frase.split(" ");
  let aux;
  for (let i = 1; i < palavras.length; i += 1){
    for (let j = 0; j < i; j += 1){
      if(palavras[i].length < palavras[j].length){
        aux = palavras[i];
        palavras[i] = palavras[j];
        palavras[j] = aux;
      }
    }
  }
  return palavras[palavras.length-1];
}
longestWord(frase) // retorna 'aconteceu'
