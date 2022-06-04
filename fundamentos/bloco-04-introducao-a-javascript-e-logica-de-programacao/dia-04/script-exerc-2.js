// Exercício 1

getPalindrom = (string) => {
    let string2 = '';
    for(let i = string.length - 1; i > -1; i --) {
        string2 = string2 + string[i];
    }
    if (string === string2) {
        return true;
    }
    return false;
}

string = 'arara';
console.log(getPalindrom(string));

// Exercicio 2 (incompleto / Não dá o valor certo) //

getIndex = (array) => {
    let aux;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] < array[j]) {
                aux = j;
            }
        }
    }
    return aux;
}

console.log(getIndex([2, 4, 6, 7, 10, 0, -3]));

