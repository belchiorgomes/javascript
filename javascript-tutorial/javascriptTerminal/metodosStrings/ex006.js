// O replace()método substitui um valor especificado por outro valor em uma string:
let frase = "Eu me chamo Julia";
let replaceFrase = frase.replace("Julia", "Augusta");

console.log(frase);
console.log(replaceFrase);

let frase2 = "Eu amo gato, gato e o meu animal favorito, como eu amo gato";
let a = frase2.replace("gato", "cachorro");
let b = frase2.replaceAll("gato", "cachorro");

console.log(a);
console.log(b);