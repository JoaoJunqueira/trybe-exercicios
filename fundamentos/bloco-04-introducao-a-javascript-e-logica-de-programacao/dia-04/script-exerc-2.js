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

const getLargerString = (array) => {
    let aux;
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i].length > array[j].length) {
                aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
    return array[array.length - 1];
}

const array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(getLargerString(array));

// Exercício 5

const findTheMoreRecurrent = (array) => {
    let vector = []; // Vezes que o valor foi repetido
    let vector1 = [];
    for (let i = 0; i < array.length; i++) {
        vector.push(0);
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                vector[i] += 1;
            }
        }
    }
    let aux;
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            if (vector[i] >= vector[j]) {
                aux = array[i];
            }
            return aux;
        }
    }
    return aux;
}

const array1 = [2, 3, 2, 5, 8, 2, 3];

console.log(findTheMoreRecurrent(array1));

// Exercício 6

const sum = (number) => {
    let aux = 0;
    for (let i = 1; i <= number; i++) {
        aux += i;
    }
    return aux;
}

const number = 7;
console.log(sum(number));

// Exercício 7

