const pessoa = {
    nome: "Jaqueline",
    sobrenome: "Silva",
    endereco: {
        logradouro: "Rua dos sonhos",
        numero: 1000
    },
};

console.log(pessoa);
console.log(`${pessoa.nome} mora na ${pessoa.endereco.logradouro}`);