function greet(){
    console.log("Hello, Word!");
}
greet();

function greet2(nome){
    console.log(`Hello, ${nome}!`);
}
greet2('Breno');

function soma(x, y){
    return x + y;
}
console.log(soma(2, 3));

//como reutilizar o codigo js

//expressão de função
const soma1 = function add(x, y){
    return x + y;
}
console.log(soma1(6, 4));

//funçõ anônima
const soma2 = function(x, y){
    return x + y;
}
console.log(soma2(100, 3));

//funções de seta
const multiply = (x,y) => {
    return x * y;
}
console.log(multiply(2, 2));

const square = x => {
    return x * x;
}
console.log(square(3));

const nome = (nome) => {
    console.log(`Prazer, ${nome}`);
}
nome('Maria');

const soma3 = x => x + x;
console.log(soma3(2));