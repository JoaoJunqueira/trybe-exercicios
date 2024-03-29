// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar 
// um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma 
// função que checa se o número apostado é igual ao número sorteado. O retorno da sua
// HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random

const gerarNumero = () => {
    return Math.ceil(Math.random()*5);
}

const sorteio = (callback) => {
    const sorteado = Math.ceil(Math.random()*5);
    if (sorteado === callback()) {
        return 'Parabéns você ganhou';
    }
    else {
        return 'Tente novamente';
    }
}
console.log(sorteio(gerarNumero));
