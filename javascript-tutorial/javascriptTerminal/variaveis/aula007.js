const pessoa = {
    nome: "Joana",
    sobrenome: "Silva",
    idade: 23,
    passatempo: ["Musica", "Filmes"],
    endereco: {
        rua: "Avenida Central",
        cidade: "Frutal",
        estado: "MG"
    }
}

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.passatempo[1]);
console.log(pessoa.endereco.cidade);

pessoa.emaill = "Joana@gmail.com";
console.log(pessoa);