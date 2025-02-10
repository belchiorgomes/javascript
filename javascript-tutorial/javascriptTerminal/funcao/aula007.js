// Funções Declarativas (Function Declarations)
/*
    São definidas usando a palavra-chave function, seguida pelo nome da função, parênteses () e chaves {} para o corpo da função.
    São "içadas" (hoisted), o que significa que podem ser chamadas antes de serem declaradas no código.
*/

function somar(a, b){
    return a + b;
}

console.log(somar(2, 3));

/*
    Funções Expressas (Function Expressions)
    São definidas como parte de uma expressão, geralmente atribuídas a uma variável.
    Podem ser anônimas (sem nome) ou ter um nome.
    Não são "içadas", portanto, precisam ser definidas antes de serem chamadas.
*/

const multiplicar = function(a, b){
    return a * b;
}

console.log(multiplicar(2, 3));

/*
    Arrow Functions
    Introduzidas no ES6 (ECMAScript 2015), oferecem uma sintaxe mais curta e concisa para definir funções.
    Utilizam a seta => para separar os parâmetros do corpo da função.
    Possuem algumas diferenças em relação às funções tradicionais, como o tratamento do this.
*/

const subtrair = (a, b) => a - b;
console.log(subtrair(3, 2));

/*
    Funções Construtoras (Constructor Functions)
    São usadas para criar objetos a partir de um modelo (classe).
    Utilizam a palavra-chave new para criar uma instância do objeto.
*/

function pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

const pessoa1 = new pessoa("Julia", 31);
const pessoa2 = new pessoa("Ana", 28);

console.log(pessoa1.nome);