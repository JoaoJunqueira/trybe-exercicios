document.getElementsByClassName("main-content")[0].style.backgroundColor = "rgb(76,164,109)";
document.getElementsByClassName("center-content")[0].style.backgroundColor = "white";
document.getElementsByTagName("p")[0].innerText = "Num apartamento alugado";
document.getElementsByTagName("h1")[0].innerText = "Exercício 5.1 - JavaScript";
document.getElementsByTagName("p")[0].innerText = document.getElementsByTagName("p")[0].innerText.toUpperCase();
console.log(document.getElementsByTagName("p")[0].innerText);