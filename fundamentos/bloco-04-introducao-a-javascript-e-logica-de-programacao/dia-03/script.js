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

console.log(drow);