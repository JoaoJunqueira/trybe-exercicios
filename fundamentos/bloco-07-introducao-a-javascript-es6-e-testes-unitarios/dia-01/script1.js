// Exercícios de fixação

// Parte 1

function userInfo() {
  let userEmail = "maria@email.com";

  // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
  console.log(userEmail);
}
userInfo();

//O seguinte trecho da erro porque não há vazão de escopo

//   function userInfo() {
//     const userEmail = 'maria@email.com';

//     // Toda expressão dentro do escopo da função userInfo tem acesso à variável userEmail
//   }
//   userInfo();
//   console.log(userEmail);

// testando o vazamento da variável para fora do if

if (true) {
    // inicio do escopo do if
    var userAge = '20';
    // const userAge = '20';
    // let userAge = '20';
    console.log(userAge); // 20
    // fim do escopo do if
  }
  console.log(userAge); // 20

//

  var userName = 'Isabella';
  var userName = 'Lucas';
  console.log(userName); // Resultado: Lucas

//

const favoriteLanguage = 'Javascript';
favoriteLanguage = 'Python';
console.log(favoriteLanguage); // Erro

let favoriteTechnology = 'Machine learning';
favoriteTechnology = 'Facial recognition';
console.log(favoriteTechnology); // Facial recognition

//

const userInfo = {
    name: 'Cláudio',
    id: '5489-2',
    email: 'claudio@email.com',
  };
  
  userInfo.name = 'João';
  
  console.log(userInfo); // { name: 'João', id: '5489-2', email: 'claudio@email.com' }

//

const technologies = ['Javascript', 'CSS', 'HTML'];
technologies.push('React');
console.log(technologies); // [ 'Javascript', 'CSS', 'HTML', 'React' ]

technologies = ['Javascript', 'CSS', 'React']
console.log(technologies); // Erro

//

age = 20;

var age;

console.log(age); // 20

//

var age;

age = 20;

console.log(age); // 20

//

var age;

console.log(age); // undefined

age = 20;

//






