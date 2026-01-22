const dadosPessoal = {
    nome: "Milena",
    sobrenome: "Silveira",
    idade: 32,
    endereco: {
        logradouro: "Rua da felicidade",
        numero: 8,
        cidade: "Linda Cidade"
    },
};

for(let dadosPessoa in dadosPessoal){
    console.log(dadosPessoa);
}

for(let dadosPessoa in dadosPessoal){
    console.log(dadosPessoal[dadosPessoa]);
}