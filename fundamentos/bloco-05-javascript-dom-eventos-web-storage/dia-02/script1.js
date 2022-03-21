//arquivo script1.js

//Fontes:
//https:www.w3schools.com/jsref/met_node_removechild.asp
//https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-trabalhando-com-elementos/03408eeb-c9de-4dd6-b383-8b6b40014245/conteudos/b1c37194-f7ad-447d-8112-1d384e527c2f/parte-i-buscando-elementos/e39f3e34-8c6c-4027-bb11-38d052247aff?use_case=side_bar

//Parte 1

//1)

console.log(document.getElementById("elementoOndeVoceEsta"));

//2)

console.log(document.getElementById("elementoOndeVoceEsta").parentNode);
document.getElementById("elementoOndeVoceEsta").parentNode.style.color = "green";

//3)

document.getElementById("primeiroFilhoDoFilho").innerText = "Seja amigo de pessoas que queiram o melhor para você.";

//4)

console.log(document.getElementById("pai").children[0]);

//5)

console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling);

//6)

console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);

//7)

console.log(document.getElementById("elementoOndeVoceEsta").nextElementSibling);

//8)

console.log(document.getElementById("pai").children[2]);

//Parte 2

//1)

let irmao1 = document.createElement('section');
document.getElementById("pai").appendChild(irmao1);
irmao1.innerText = "Estou aqui!";

//2)

let filho1 = document.createElement('section');
document.getElementById("elementoOndeVoceEsta").appendChild(filho1);
filho1.innerText = "Também estou aqui!";

//3)

let filho2 = document.createElement('section');
document.getElementById("primeiroFilhoDoFilho").appendChild(filho2);
filho2.innerText = "Não esqueçam de mim!";

//4)

console.log(filho2.parentElement.parentElement.nextElementSibling);

//Parte 3

//1)

//https://www.w3schools.com/jsref/met_node_removechild.asp

let pai = document.getElementById("pai");
pai.removeChild(pai.children[0]);
pai.removeChild(pai.lastChild);
pai.removeChild(pai.lastChild.previousElementSibling);
pai.removeChild(pai.children[1]);
let filhofilho = document.getElementById("primeiroFilhoDoFilho");
filhofilho.removeChild(filhofilho.lastElementChild);
let elemento = document.getElementById("elementoOndeVoceEsta");
elemento.removeChild(elemento.children[1]);
elemento.removeChild(elemento.lastChild);