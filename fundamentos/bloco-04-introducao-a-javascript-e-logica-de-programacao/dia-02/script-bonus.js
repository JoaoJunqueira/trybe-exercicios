// https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-array-e-loop-for/3d453622-6c99-46af-a884-fecc68811230/exercicios/f93175b8-64ca-4d6a-b702-55fbbb579341/bonus/ac2ab0aa-3f26-48e7-818a-956b56ca3f97?use_case=next_button
// http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 1; i < numbers.length; i += 1) {
    for(let j = 0; j < i; j += 1) {
        if(numbers[i] < numbers[j]){
            aux = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = aux;
        }
    }
}

console.log(numbers);

//

for(let i = 1; i < numbers.length; i += 1) {
    for(let j = 0; j < i; j += 1) {
        if(numbers[j] < numbers[i]){
            aux = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = aux;
        }
    }
}

console.log(numbers);

let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayNovo = [];

for(let i = 0; i < array.length; i += 1){
    if(i != (array.length - 1)){
        arrayNovo.push(array[i]*array[i + 1]);
    }
    else{
        arrayNovo.push(array[i]*2);
    }
}

console.log(arrayNovo);
