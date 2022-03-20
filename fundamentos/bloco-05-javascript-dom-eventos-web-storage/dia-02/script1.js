//arquivo script1.js

//Fontes:
//https:www.w3schools.com/jsref/met_node_removechild.asp
//https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-trabalhando-com-elementos/03408eeb-c9de-4dd6-b383-8b6b40014245/conteudos/b1c37194-f7ad-447d-8112-1d384e527c2f/parte-i-buscando-elementos/e39f3e34-8c6c-4027-bb11-38d052247aff?use_case=side_bar

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


