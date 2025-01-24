let num1 = parseInt(prompt("Digite o primeiro número:"));
let num2 = parseInt(prompt("Digite o segundo número:"));

if (num1 > num2) {
    console.log(num1 + " é o maior número.");
} else if (num2 > num1) {
    console.log(num2 + " é o maior número.");
} else {
    console.log("Os números são iguais.");
}