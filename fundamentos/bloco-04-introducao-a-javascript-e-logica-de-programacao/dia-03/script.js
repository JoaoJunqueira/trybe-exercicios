// Exercício 1

let n = 10;
let fatorial = 1;
for(i = 1; i <= n; i++){
    fatorial = fatorial*i;
}
console.log(fatorial);

// Exercício 2

let word = "tryber";
let drow = [];
let soma = [];

for(let i = 0; i < word.length; i++){
    drow[(word.length)-i-1] = word[i];
}

for(let i = 0; i < drow.length; i++){
    soma = soma + drow[i];
}

console.log(soma);

// Exercício 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let aux1 = [];
for(let i = 0; i < array.length; i++){
    if(array[i].length > aux1.length){
        aux1 = array[i];
    }
}
console.log(aux1);
let aux2 = aux1;
for(let i = 0; i < array.length; i++){
    if(array[i].length < aux2.length){
        aux2 = array[i];
    }
}
console.log(aux2);

// Exercício 4

