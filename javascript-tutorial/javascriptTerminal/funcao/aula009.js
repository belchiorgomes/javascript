function myFunction(a, b){
    return a + b;
}

let resultado = myFunction(3, 2);
console.log(`O resultado da função e ${resultado}`);

function saudacao(nome){
    return `Olá, eu me chamo ${nome}`;
}

console.log(saudacao('Sauana'));

const saudacao01 = function(nome){
    return `Eu me chamo ${nome}`;
}

console.log(saudacao01('Estela'));

const saudacao02 = (nome) => `Eu sou a ${nome}`;
console.log(saudacao02('Julia'));