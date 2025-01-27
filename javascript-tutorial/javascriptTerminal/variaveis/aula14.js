function nome(nome){
    console.log(`Meu nome e ${nome}`);
}

nome("Bruna");

function saudacao(nome, idade=28){
    console.log(`Olá eu sou ${nome} tenho ${idade} anos`);
}

saudacao("Carolina")

function criar_nomeCompleto(nome, sobrenome){
    return `Tudo bem, sou a ${nome} ${sobrenome}`;
}

const nomeCompleto = criar_nomeCompleto("Juliane", "Silva");
console.log(nomeCompleto);