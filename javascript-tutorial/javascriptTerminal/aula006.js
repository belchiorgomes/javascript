const vetor = ["A", 23, 3, "Oi"];
console.log(vetor);
console.log(vetor.length)
console.log(Array.isArray(vetor));
console.log(Array.isArray("Olá Muno"));

const frutas = ["Maçã", "laranjas", "uvas", "acerolas"];
console.log(frutas[2]);

console.log(frutas.indexOf("uvas"));

frutas[4] = "Melacias";
console.log(frutas);

frutas[2] = "Peras";
console.log(frutas);

frutas.push("Abacate");
console.log(frutas);

frutas.unshift("Morangos");
console.log(frutas);

//frutas.pop();
const fruta_removita = frutas.pop();
console.log(`A fruta removida no final foi, ${fruta_removita}`);        

const fruta_removita_inicio = frutas.shift();
console.log(`A fruta removida no inicio foi, ${fruta_removita_inicio}`);    