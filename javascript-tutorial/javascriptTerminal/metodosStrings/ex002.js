// slice()extrai uma parte de uma string e retorna a parte extraída em uma nova string.

let frase = "Eu vou escrever uma frase para ser recortada!";
let recorte = frase.slice(7, 25); // primeiro paramentro inicio e o segundo o paramentro de encerramento, e pode ser valores negatiovos, começam no final da string.
console.log(recorte);

// substring()é semelhante a slice().

console.log(frase.substring(0,15));