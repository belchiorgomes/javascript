// Construtores de objetos JavaScript

function Pessoa(nome, idade, sexo){
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
    this.apresentacao = () => `${this.nome} ${this.idade} ${this.sexo}`
}

const pessoa1 = new Pessoa("Angelica", 35, "F");
const pessoa2 = new Pessoa("Sebastiao", 44, "M");

console.log(pessoa1.apresentacao());