//Fonte: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-array-e-loop-for/3d453622-6c99-46af-a884-fecc68811230/conteudos/7553db20-6428-4e93-8da7-8a71c7dec765/arrays-listas/9739ef35-84ca-4eb8-8818-c53b5d59dcdf?use_case=side_bar

//

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

//

let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio);

//

menu.push('Contato');
console.log(menu);

//

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let i = 0; i < groceryList.length; i++){
    console.log(groceryList[i]);
}

//

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for(let name of names){
    console.log(name);
}
