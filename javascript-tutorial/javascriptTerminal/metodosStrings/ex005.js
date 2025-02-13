// O trim()método remove espaços em branco de ambos os lados de uma string:

let frase = "  Eu sou uma frase bem bonida!   ";
let fraseTrim = frase.trim();
console.log(frase.length);
console.log(fraseTrim.length);

// O trimStart()método funciona como trim(), mas remove os espaços em branco somente do início de uma string.
console.log(frase.trimStart().length);

// O trimEnd()método funciona como trim(), mas remove os espaços em branco somente do final de uma string.
console.log(frase.trimEnd().length);

// O padStart()método preenche uma string desde o início.
// Ele preenche uma string com outra string (várias vezes) até atingir um determinado comprimento.

let a ="5";
let b = a.padStart(5,"0");
let c = a.padEnd(3,"1");
console.log(b, c);

/*
    O repeat()método retorna uma string com um número de cópias de uma string.

    O repeat()método retorna uma nova string.

    O repeat()método não altera a string original.
*/

let frase1 = "Sou eu que estou aqui!  ";
console.log(frase1.repeat(3));