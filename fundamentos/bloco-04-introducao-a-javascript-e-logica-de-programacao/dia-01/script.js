// Programa 1

a = 3;
b = 5;

soma = a + b;
subtracao = a - b;
multiplicacao = a * b;
divisao = a / b;
modulo = b % a;

console.log("Soma");
console.log(soma);

console.log("Subtração");
console.log(subtracao);

console.log("Multiplicação");
console.log(multiplicacao);

console.log("Divisão");
console.log(divisao);

console.log("Módulo");
console.log(modulo);

// Programa 2

a = 8;
b = 16;

if(a>b){
    console.log(a)
}
else if(b>a){
    console.log(b)
}
else{
    console.log("São iguais")
}

// Programa 3

a = 7;
b = 13;
c = 33;

if(a>b && a>c){
    console.log("a");
}
if(b>a && b>c){
    console.log("b");
}
if(c>a && c>b){
    console.log("c");
}

// Programa 4

a = 10;

if(a>0){
    console.log("positive");
}
if(a<0){
    console.log("negative");
}
else{
    console.log("zero");
}

// Programa 5

a = 50;
b = 40;
c = 90;

if((a>0 && b>0 && c>0) && (a+b+c==180)){
    console.log("true");
}
else{
    console.log("false");
} 

// Programa 6

// Link: https://www.w3schools.com/jsref/jsref_tolowercase.asp

a = "CaVaLo";
b = a.toLowerCase();

if(b === "rei"){
   console.log("Uma posição em qualquer sentido");
}
else if(b === "rainha"){
   console.log("Todos os sentidos");
}
else if(b === "bispo"){
    console.log("Diagonais");    
}
else if(b === "cavalo"){
    console.log("Movimento em L, 3 casas para frente/trás/lados + 2 casas direita/esquerda");    
}
else if(b === "torre"){
    console.log("Para frente, para atrás e para os lados");    
}
else if(b === "peao"){
    console.log("Uma casa para frente");   
}

// Programa 7

a = 76;

if((a>=90)&&(a<=100)){
    console.log("A");
}
else if((a>=80)&&(a<90)){
    console.log("B");
}
else if((a>=70)&&(a<80)){
    console.log("C");
}
else if((a>=60)&&(a<70)){
    console.log("D");
}
else if((a>=50)&&(a<60)){
    console.log("E");
}
else if(a<50){
    console.log("F");
}
else {
    console.log("Erro")
}

// Programa 8

a = 7;
b = 5;
c = 10;

if((a%2==0)||(b%2==0)||(c%2==0)){
    console.log("true");
}
else{
    console.log("false");
}

// Programa 9

a = 8;
b = 6;
c = 11;

if((a%2!=0)||(b%2!=0)||(c%2!=0)){
    console.log("true");
}
else{
    console.log("false");
}

// Programa 10

custo = 2000;
preço = 3000;

lucro = preço - custo - 0.2*custo;

if((custo<0)&&(preço<0)){
    console.log("Erro");
}
else{
    console.log(lucro);
}

// Programa 11

let s = 3000;

let in1 = 0.08;
let in2 = 0.09;
let in3 = 0.11;
let in4 = 570.88;

let ir1 = 0.075;
let de1 = 142.8;
let ir2 = 0.15;
let de2 = 354.8;
let ir3 = 0.225;
let de3 = 636.13;
let ir4 = 0.275;
let de4 = 869.36;

if(s<=1556.94){
    s1 = s - in1*s;
}
else if((s>1556.94)&&(s<=2594.92)){
    s1 = s - in2*s;  
}
else if((s>2594.93)&&(s<=5189.82)){
    s1 = s - in3*s;
}
else{
    s1 = s - in4;
}

if(s1<=1903.98){
    sl = s1;
}
else if((s1>=1903.99)&&(s1<=2826.65)){
    sl = s1 - in1*s1 + de1;
}
else if((s1>=2826.66)&&(s1<=3751.05)){
    sl = s1 - in2*s1 + de2;
}
else if((s1>=3751.06)&&(s1<=4664.68)){
    sl = s1 - in3*s1 + de3;
}
else{
    sl = s1 - in4*s1 + de4;
}

console.log(sl);


