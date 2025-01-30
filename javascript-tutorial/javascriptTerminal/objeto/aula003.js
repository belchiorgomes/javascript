// Sintaxe literal
const pessoa = {
    nome: "Maria",
    idade: 28,
    saudacao: function(){
        console.log(`Olá, meu nome é ${this.nome}`)
    }
};

pessoa.saudacao();

// Atribuição
const pessoa2 = {
    nome: "Natalia",
    idade: 26,
};

pessoa2.saudacao2 = function(){
    return `Meu nome e ${this.nome} e tenho ${this.idade} anos`;
};

console.log(pessoa2.saudacao2());