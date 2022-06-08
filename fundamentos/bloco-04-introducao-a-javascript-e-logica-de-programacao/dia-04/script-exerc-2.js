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

// Exercicio 2 

getHigherValueIndex = (array) => {
    let array2 = []
    for (let i = 0; i < array.length; i++) {
        array2[i] = array[i];
    }
    let aux;
    let index;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[array.length-1] === array2[i]) {
            index = i;
        }
    }
    return index;
}

console.log(getHigherValueIndex([2, 4, 6, 7, 10, 0, -3]));

// Exercício 3

getLowerValueIndex = (array) => {
    let array2 = []
    for (let i = 0; i < array.length; i++) {
        array2[i] = array[i];
    }
    let aux;
    let index;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[0] === array2[i]) {
            index = i;
        }
    }
    return index;
}

console.log(getLowerValueIndex([2, 4, 6, 7, 10, 0, -3]));

// Exercício 4


