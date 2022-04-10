// Atividade Bônus
// Formas geométricas (As partes são independentes)

// 1)

let n = 6; // Valor editável que deve ser maior que 1

string = '';

for(let i = 1; i <= n; i += 1){
    for(let j = 1; j <= n; j += 1){
        string += '*';
    }    
    string += '\n';
}

console.log(string);

// 2)

n = 5;

string = '';
for(let i = 1; i <= n; i += 1){
    for(let j = 1; j <= i; j += 1){
        string += '*';   
    }
    string += '\n';
}

console.log(string);

// 3)


