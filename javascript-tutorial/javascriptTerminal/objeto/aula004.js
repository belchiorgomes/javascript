// Construtor em javascript

function Pessoa1(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.apresentar = function(){
        console.log(`Olá eu me chamo ${this.nome}, e tenho ${this.idade} anos`);
    }
}

const pessoa1 = new Pessoa1("Olivina", 55);
const pessoa2 = new Pessoa1("Greice", 21);

pessoa1.apresentar();
pessoa2.apresentar();

// Construtores em classes (ES6+):

class Pessoa2{
    constructor(nome, idade){
        this.nome = nome;
        this.idade  = idade;
    }

    apresenta(){
        console.log(`${this.nome}, ${this.idade}`);
    }
}

const pessoa3 = new Pessoa2("Julia", 21);
pessoa3.apresenta();