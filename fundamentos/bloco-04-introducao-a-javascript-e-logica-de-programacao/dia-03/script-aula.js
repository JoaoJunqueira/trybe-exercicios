//

let soma = 0;
for(let i = 50; i <= 100; i++){
    soma = soma + i;
}
console.log("A soma de 50 a 100 é: " + soma);
 
//

let n = 0;
for(let i = 1; i <= 125; i++){
    if(i%3 === 0){
        n++;
    }
    else{
        n = n;
    }
}
console.log(n);
