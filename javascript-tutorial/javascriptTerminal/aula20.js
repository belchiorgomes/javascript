// Crie um programa que peça ao usuário para digitar uma frase e conte quantas vezes a letra "a" aparece.

const frase = "Esta e uma frase bem Bonida, feita para um exercicio de JavaScript A".toLowerCase();

let contador = 0;

// Percorremos cada caractere da frase
for (let i = 0; i <= frase.length; i++) {
  // Se o caractere atual for "a" (maiúsculo ou minúsculo), incrementamos o contador
  if (frase[i] === 'a') {
    contador++;
  }
}

// Imprimimos o resultado
console.log("A letra 'a' aparece", contador, "vezes na frase.");

/*
let contador2 = 0;

for(let x = 0; x <= frase.length; x++){
    if(frase[x] === "a" || frase[x] === "A"){
        contador2++;
    }
}

console.log("A letra 'a' aparece", contador2, "vezes na frase.");
*/
