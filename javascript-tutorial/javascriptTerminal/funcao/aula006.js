// Saudação Personalizada: Crie uma função que aceite o nome de uma pessoa como argumento e retorne uma saudação personalizada

function saudacao(nome){
    return `Olá ${nome}, muito prazer em conhecer`;
}

console.log(saudacao("Gabriela"));

// ---------------------------- //

const saudacao2 = nome => `Olá ${nome} muito prazer em conhecer você`;
console.log(saudacao2("Estela"));

// --------------------------- //

function saudacao3(nome, sexo){
    if(sexo === "M" || sexo === "m"){
        return `Olá Sr ${nome} como você esta`;
    }else if(sexo === "F" || sexo === "f"){
        return `Olá Sra ${nome} como você esta`;
    }else{
        return `Olá ${nome}`;
    }
}

console.log(saudacao3("Sebastião", "M"));