// Exercícios de fixação 1 (script ligado a index1.html)

// 1) Mudar o nome do título

document.getElementById("page-title").innerText = "Pulp Fiction";

// 2) Mudar a cor do segundo parágrafo

document.getElementById("second-paragraph").style.color = "green";

// 3) Mudar o subtítulo

document.getElementById("subtitle").style.fontWeight = "50px";
document.getElementById("subtitle").style.backgroundColor = "blue";

// 4) Adicione uma classe igual aos dois parágrafos (Alterar estilos)

console.log(document.getElementsByClassName("mystyle"));
document.getElementsByClassName("mystyle")[0].style.backgroundColor = "blueviolet";
document.getElementsByTagName("h4")[0].style.color = "white";