// https://www.w3schools.com/jsref/met_document_getelementsbytagname.asp
// https://www.w3schools.com/jsref/met_node_removechild.asp
// https://app.betrybe.com/course/fundamentals/javascript-dom-eventos-e-web-storage/javascript-trabalhando-com-elementos/03408eeb-c9de-4dd6-b383-8b6b40014245/exercicios/b0f85ab5-d85e-431b-a4f3-2969b626c030/agora-a-pratica/6a8b8881-e24a-41ac-aa97-4715dd70f833?use_case=side_bar
// https://www.w3schools.com/howto/howto_js_add_class.asp
// https://www.w3schools.com/jsref/prop_img_src.asp

// 1) Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body 

let tagh1 = document.createElement('h1');
tagh1.innerText = "Exercício 5.2 - JavaScript DOM";
document.getElementsByTagName('body')[0].appendChild(tagh1); // Tem definir a posição do vetor para funcionar

// 2) Adicione a tag main com a classe main-content como filho da tag body

let tagmain = document.createElement('main');
document.getElementsByTagName('body')[0].appendChild(tagmain).classList.add("main-content");

// 3) Adicione a tag section com a classe center-content como filho da tag main criada no passo 2

let tagsection = document.createElement('section');
document.getElementsByTagName('main')[0].appendChild(tagsection).classList.add("center-content");

// 4) Adicione a tag p como filho do section criado no passo 3 e coloque algum texto

let tagp = document.createElement('p');
document.getElementsByTagName('section')[0].appendChild(tagp).innerText = "Compare você ao que você foi ontem, não ao que outra pessoa é hoje.";

// 5) Adicione a tag section com a classe left-content como filho da tag main criada no passo 2

let tagsection2 = document.createElement('section');
document.getElementsByTagName('main')[0].appendChild(tagsection2).classList.add("left-content");

// 6) Adicione a tag section com a classe right-content como filho da tag main criada no passo 2

let tagsection3 = document.createElement('section');
document.getElementsByTagName('main')[0].appendChild(tagsection3).classList.add("right-content");

// 7) Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5

//Fonte: https://satellasoft.com/artigo/javascript/alterar-imagem-em-tempo-real-com-javascript
//       https://pt.stackoverflow.com/questions/56766/adicionar-atributo-a-um-elemento
//       https://www.w3schools.com/jsref/met_element_setattribute.asp

let  imagem = document.createElement('img');
document.getElementsByClassName("left-content")[0].appendChild(imagem);
imagem.id = "minha-imagem";
document.getElementById("minha-imagem").setAttribute("class","small-image");
document.getElementById("minha-imagem").src = "https://picsum.photos/200";

// 8)
