// 

let n = 6;

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


