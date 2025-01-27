// Crie um programa que gere 10 números aleatórios entre 1 e 100 e imprima a média deles.

let soma = 0;

for(let a = 0; a < 10; a++){
    let numeroAleatorio = Math.floor((Math.random() * 100));
    soma += numeroAleatorio
    console.log(numeroAleatorio);
}

let media = soma / 10;
console.log(media);