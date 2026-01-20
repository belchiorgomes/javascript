const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let somaPares = 0;
let somaImpares = 0;

for(let i = 0; i < numeros.length; i++){
    let numero = numeros[i];
    
    if(numero % 2 == 0){
        somaPares += numero;
    }else{
        somaImpares += numero;
    }
}

console.log(`A soma entre os numeros pares é ${somaPares}`);
console.log(`A soma entre os numeros impares é ${somaImpares}`);