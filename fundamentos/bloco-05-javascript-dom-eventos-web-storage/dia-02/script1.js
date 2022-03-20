// arquivo script1.js


// https:www.w3schools.com/jsref/met_node_removechild.asp

// let test = document.createElement('section');
// let test2 = document.createElement('section');
// let test3 = document.createElement('section');
// test.innerText = "Amigo estou aqui";
// test2.innerText = "Se a fase é ruim";
// test3.innerText = "E são tantos problemas que não tem fim";
// document.getElementById('pai').appendChild(test);
// document.getElementById('elementoOndeVoceEsta').appendChild(test2);
// document.getElementById('primeiroFilhoDoFilho').appendChild(test3);
console.log(document.getElementById('elementoOndeVoceEsta'));
document.getElementById('elementoOndeVoceEsta').parentNode.style.backgroundColor = "green";
// document.getElementById('primeiroFilhoDoFilho').innerText = "É importante estudar todos os dias e fazer exercícios físicos."
console.log(document.getElementById('pai').firstElementChild);
console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling.data);
console.log(document.getElementById('elementoOndeVoceEsta').nextSibling.nextSibling);
console.log(document.getElementById('pai').lastElementChild.previousElementSibling);
console.log(document.getElementById('primeiroFilhoDoFilho').children[0].parentElement.parentElement.nextElementSibling);
segundoFdeF = document.getElementById('elementoOndeVoceEsta').children[1];

document.getElementById('elementoOndeVoceEsta').removeChild(segundoFdeF);


