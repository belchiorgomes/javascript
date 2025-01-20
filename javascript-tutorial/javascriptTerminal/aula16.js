//Escopo Global:

//Variáveis declaradas fora de qualquer função ou bloco têm escopo global.
//São acessíveis de qualquer lugar do seu código.

const nome = "Julia"; //Variavel Global

function saudacao(){
    console.log(`Olá sou a ${nome}`)
}

saudacao(); //sAIDA DO : olá sou a Julia

//--------------------------------------------//

// Escopo de Função:

// Variáveis declaradas dentro de uma função têm escopo local para aquela função.

// São acessíveis apenas dentro da função onde foram declaradas.

function soma(a, b){
    let resultado = a + b;
    return resultado;
}

console.log(soma(2, 3)); // Saida: 5
//console.log(resultado); // Erro

// ------------------------------------------------- //

// Escopo de Bloco (ES6):

// Introduzido no ES6, o escopo de bloco restringe a visibilidade de variáveis declaradas com let e const ao bloco onde foram declaradas (como dentro de um if, for ou outro bloco).

if (true) {
    let x = 10;
    console.log(x); // Saída: 10
}
// console.log(x); // Erro: x não está definida fora do bloco