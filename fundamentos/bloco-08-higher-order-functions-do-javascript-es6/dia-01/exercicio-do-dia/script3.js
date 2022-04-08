// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas 
// corretas (Gabarito), o segundo será um array de respostas a serem verificadas 
// (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas 
// estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. 
// Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos,
// e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const prova = (resposta, correcao, validador) => {
    return validador(resposta, correcao);
}

const validador = (resposta, correcao) => {
    let cont = 0;
    for (let i = 0; i < correcao.length; i += 1) {
        if (resposta[i] === correcao[i]) {
            cont += 1;
        }
        else if ((resposta[i] !== correcao[i])&&(resposta[i] !== 'N.A')) {
            cont += 0.5;
        }
        else if (resposta[i] === 'N.A') {
            cont = cont;
        }
    }
    return cont;
}

console.log(prova(STUDENT_ANSWERS, RIGHT_ANSWERS, validador));