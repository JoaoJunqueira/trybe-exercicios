// https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-dom-e-seletores/d1494833-9ca9-4931-a2cb-75b860813446/exercicios/13b2addd-c6f0-46dd-be79-fc8865272027/funcoes-de-manipulacao-do-dom/518eea7a-1797-4386-ae7c-b3a65446daff?use_case=side_bar

document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";
document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";
document.getElementsByTagName("p")[0].innerText = "Num apartamento alugado";
document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";
document.getElementsByTagName("p")[0].innerText = document.getElementsByTagName("p")[0].innerText.toUpperCase();
console.log(document.getElementsByTagName("p")[0].innerText);
