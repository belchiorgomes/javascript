const frutas = ["Abacate", "Banana", "Cebola", "Damasco"];
const frutasSize = frutas.length; // tamanho do vetor
console.log(frutasSize);

console.log(frutas[0]); // mostra o primeiro item da lista

console.log(frutas[frutasSize - 1]); // mostra o ultimo item da lista

for(let a = 0; a < frutasSize; a++){
    console.log(frutas[a]);
}