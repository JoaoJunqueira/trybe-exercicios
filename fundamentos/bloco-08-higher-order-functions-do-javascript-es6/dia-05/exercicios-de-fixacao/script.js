//1) Faça uma lista com as suas frutas favoritas
const specialFruit = ["morango", "uva", "banana"];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ["mamão", "maça", "pêra"];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));

// 2) Não teve (tópico: parâmetro rest)

// 3)

// 1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações
// referentes ao cargo desta pessoa usuária na empresa trappistEnterprise .
// Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.
// Para isso, utilize o spread operator .

const user = {
  name: "Maria",
  age: 21,
  nationality: "Brazilian",
};

const jobInfos = {
  profession: "Software engineer",
  squad: "Rocket Landing Logic",
  squadInitials: "RLL",
};
const data = { ...user, ...jobInfos };
console.log(data);

// 2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado
// anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals.
// Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer
// and my squad is RLL-Rocket Landing Logic"

const { name, age, nationality, profession, squad, squadInitials } = data;
const string = `Hi, my nome is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`;
console.log(string);

// 4)
// 1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher
// a função e a saudação.

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao1, saudacao2] = saudacoes;
saudacao2(saudacao1);

// 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. 
// Através da desestruturação de arrays, corrija os valores das variáveis.

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes
// ao seu verdadeiro tipo

const palavras = [comida = 'arroz', animal = 'gato', bebida = 'água'];
[comida, animal, bebida] = palavras;
console.log(palavras);

// 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir.
// Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.

let numerosPares = [1, 3, 5, 6, 8, 10, 12];
[um, tres, cinco, seis, oito, dez, doze] = numerosPares;
numerosPares = [seis, oito, dez, doze];

console.log(numerosPares); // [6, 8, 10, 12];

// 5) Do jeito que está, quando passamos person para a função GetNationality 
// o retorno é João is undefined . Ajuste a função GetNationality para que a 
// chamada GetNationality(person) retorne João is Brazilian .

const getNationality = ({ firstName, nationality }) => `${firstName} is ${origin}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
const {firstName, lastName, origin = 'Brazilian'} = person;
console.log(getNationality(person));

// 6) Agora é hora de praticar: altere a função getPosition utilizando a property shorthand .

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

// 7) Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos.
// Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro.

const multiply = (number, value = 1) => {
  // Escreva aqui a sua função
  return number * value;
};

console.log(multiply(8, 4));
