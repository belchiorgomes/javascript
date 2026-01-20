const numeros = [2, "2", 4, 1, [], 6, "string", null, 3, 8];
let somaDosNumeros = 0;

for(let i = 0; i < numeros.length; i++){
    let somenteNumeros = numeros[i];
    
    if(typeof somenteNumeros === "number"){
        somaDosNumeros += somenteNumeros;
    }
}

console.log(`A soma entre os numeros do Array é ${somaDosNumeros}`);