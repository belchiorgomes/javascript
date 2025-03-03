class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    
    apresentar(){
        console.log(`Olá tudo bem, eu me chamo ${this.nome} e tenho ${this.idade} anos`);
    }
}

const pessoa01 = new Pessoa("Luiza", 39);
const pessoa02 = new Pessoa("Vanesa", 30);

pessoa01.apresentar();
pessoa02.apresentar();