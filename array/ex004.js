const numeros = [2, 5, 3, 8, 10, 2];
let soma = 0;

for(let i = 0; i < numeros.length; i++){
    soma += numeros[i];
}

console.log(`A soma entre os numeros é ${soma}`);