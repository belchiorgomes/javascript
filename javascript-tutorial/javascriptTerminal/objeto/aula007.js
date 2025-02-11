const pessoa = {
    nome: "Ana Vitoria",
    idade: 22,
    saudacao: () => `Olá eu sou a ${pessoa.nome}`,
};

console.log(pessoa.saudacao().toUpperCase());