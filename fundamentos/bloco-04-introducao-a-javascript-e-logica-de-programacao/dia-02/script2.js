// Fonte: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-array-e-loop-for/3d453622-6c99-46af-a884-fecc68811230/exercicios/f93175b8-64ca-4d6a-b702-55fbbb579341/agora-a-pratica/4bfd26b3-7f08-4b26-863f-e4b32dde7e18?use_case=next_button

//

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

//

resultado = 0;

for(let i = 0; i < numbers.length; i++){
    resultado = resultado + numbers[i];
}

console.log(resultado);

//

media = resultado/(numbers.length);
console.log(media);

//

if(media > 20){
    console.log("valor maior que 20");
}
else{
    console.log("valor menor ou igual a 20");
}

//

maior = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if(maior<numbers[i]){
        maior = numbers[i];
    }
    else{

    }
}
console.log(maior);

//

impar = 0;
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 != 0){
        impar = impar + 1;
    }
}
console.log(impar);
if(impar == 0){
    console.log("nenhum valor ímpar encontrado");
}

//

menor = numbers[0];

for(let i = 0; i < numbers.length; i++){
    if(menor > numbers[i]){
        menor = numbers[i];
    }
    else{

    }
}
console.log(menor);

//

array = [];
for(let i = 1; i <= 25; i++){
    array[i-1] = i;
}
console.log(array);

//

divisao = [];
for(let i = 1; i <= 25; i++){
    divisao[i-1] = array[i-1]/2;
}
console.log(divisao);
