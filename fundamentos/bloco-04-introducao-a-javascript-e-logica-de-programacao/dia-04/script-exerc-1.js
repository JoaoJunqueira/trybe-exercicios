//

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};
console.log('Bem vinda, ' + info.personagem + '!');

//

console.log(info);

//

for(let key in info){
    console.log(key);
}

//

for(let key in info){
    console.log(info[key]);
}

//

let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};
for(let key in info){
    if(info[key] === info2[key]){
        console.log("Ambos recorrentes");
    }
    else {
        console.log(info[key] + ' e ' + info2[key]);
    }
}

//

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};
console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + " se chama " + leitor.livrosFavoritos[0].titulo + ".");

//

const livros = leitor.livrosFavoritos;
const melhorFilme = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  };
livros.push(melhorFilme);
console.log(livros);

//

console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos.');


