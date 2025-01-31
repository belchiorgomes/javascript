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

// Sintaxe de classe (ES6+

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    saudar(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade}`);
    }
}

const pessoa1 = new Pessoa("Amanda", 40);
pessoa1.saudar();