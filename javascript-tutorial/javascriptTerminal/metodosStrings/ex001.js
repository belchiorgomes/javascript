// A length propriedade retorna o comprimento de uma string:

let frase = "I love you";

console.log(`A frase '${frase}' tem ${frase.length} caracteres!`);

// O charAt()método retorna o caractere em um índice especificado (posição) em uma string:
console.log(frase.charAt(3));

// O charCodeAt()método retorna o código do caractere em um índice especificado em uma string:
console.log(frase.charCodeAt(3));

// O at()método retorna o caractere em um índice especificado (posição) em uma string.
let letra = frase;
console.log(`A frase '${frase}' o caractere na posição 3 e a letra ( ${letra.at(3)} )`);