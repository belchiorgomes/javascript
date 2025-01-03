//Criação de um objeto
let pessoa = {
    nome: "Bruna",
    idade: 30,
    profissao: "Desenvolvedora",
    saudacao: function(){
        return `Olá, meu nome e ${this.nome}`;
    }
};

//Acessando propriedades do objeto
console.log(pessoa.nome);
console.log(pessoa["idade"]);

console.log(pessoa.saudacao());

//Adicionando uma nova propriedade
pessoa.altura = 1.75;

//Modificando uma propriedade existente
pessoa.idade = 31;

console.log(pessoa);