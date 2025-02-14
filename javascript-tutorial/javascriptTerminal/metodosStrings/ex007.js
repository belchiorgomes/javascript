// indexOf()

const frase = "Eu amo minha casa";
const posicaoFrase = frase.indexOf("amo");
console.log(posicaoFrase);

const palavra = "restaurante";
console.log(palavra.indexOf("a"));
console.log(palavra.indexOf("i"));

const numero = [1,2,3,4,5];
console.log(numero.indexOf(4));

const letra = ["a","b","c","d"];
console.log(letra.indexOf("c"));

const fraseGrande = "Esta é uma frase com várias palavras repetidas, como frase e palavras.";

const palavra1 = "palavras";
let indice = fraseGrande.indexOf(palavra1);

while(indice !== -1){
    console.log(`A palavra "${palavra1}" foi encontrada na posição ${indice}.`);
    indice = fraseGrande.indexOf(palavra1, indice + 1); // Começa a busca após a ocorrência atual
}
