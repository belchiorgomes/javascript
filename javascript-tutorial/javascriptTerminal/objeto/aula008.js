const pessoa1 = {
    nome: "Amanda",
    idade: 35,
    sexo: "F",
    cidade: "Ubatuba",
};

for(const x in pessoa1){
    console.log(`${x}: ${pessoa1[x]}`);
}

// Object.keys()

const pessoa2 = {
    nome: "Aline",
    idade: 21,
    sexo: "F",
    cidade: "Cabo Frio",
};

const chaves = Object.keys(pessoa2);

for(let y = 0; y < chaves.length; y++){
    const chave = chaves[y];
    console.log(`${chave}: ${pessoa2[chave]}`);
}