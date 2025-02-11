const pessoa = {
    nome: "Angela",
    idade: 32,
    nomeCompleto: function(){
        return `Olá me chamo ${this.nome} ${this.sobrenome}, muito prazer em conhecelo`;
    }
};

pessoa.sobrenome =  "silva";

console.log(`Meu nome e ${pessoa.nome} e tenho ${pessoa.idade} anos`);
console.log(`${pessoa["nome"]} ${pessoa["idade"]}`);

delete pessoa.idade;// deleta uma propriedade
console.log(`Meu nome e ${pessoa.nome} e tenho ${pessoa.idade} anos`);

console.log(pessoa.nomeCompleto());

const pessoaA = pessoa;
pessoaA.nome = "Juliete";
console.log(pessoa.nomeCompleto());