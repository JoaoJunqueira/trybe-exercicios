//

let n = 10;
let fatorial = 1;
for(i = 1; i <= n; i++){
    fatorial = fatorial*i;
}
console.log(fatorial);

//

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

//

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

//

array = [];

for(let i = 2; i <= 50; i += 1){
    let cont = 0;
    for(let j = 1; j <= i; j += 1){
        if(i % j === 0){
            cont += 1;
        } 
    }
    if(cont === 2){
        array.push(i);
    }
}

console.log(array);
