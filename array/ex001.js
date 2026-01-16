let nomes = new Array("Breno", "Julia", "Beatriz", "João", "Julia");

for(let x = 0; x < nomes.length; x++){
    console.log(nomes[x])
}

console.log(nomes.length)

const prompt = require('prompt-sync')(); // Importa e inicializa

const nome = prompt('Qual é o seu nome? '); // Pede a entrada
const idade = prompt('Qual sua idade');
console.log(`Olá, ${nome}! ${idade}`);