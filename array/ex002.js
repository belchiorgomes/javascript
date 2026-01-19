let numeros = [4, 8, 1, 0, 2, 3, 10, 7];
let numeros2 = [];

for(let i = 0; i < numeros.length; i++){
    let numero = numeros[i] * 2;
    // numeros2[numeros2.length] = numero;
    numeros2.push(numero);
}

console.log(numeros);
console.log(numeros2);
