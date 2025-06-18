const numeros = [1,2,3,4,5];

//Usando Map para dobrar os numero do Array

/*
const numeroDobrados = numeros.map(function(numero){
    return numero * 2;
});
*/

const numeroDobrados = numeros.map(numero => numero *2);

console.log(numeroDobrados);
console.log(numeros);

/*
    Exemplo 2: Extrair Propriedades de Objetos
    Suponha que você tenha um array de objetos de usuários e queira apenas uma lista com os nomes desses usuários.
*/

const usuarios = [
    {id: 1, nome: 'Julia', idade:32},
    {id: 2, nome: 'Gabriella', idade: 28},
    {id: 3, nome: 'Ana Vitoria', idade: 22}
];

const nomeUsuario = usuarios.map(nome => nome.nome);

console.log(nomeUsuario);

const apresentacao = usuarios.map(apresentar => `Olá sou a ${apresentar.nome} é tenho ${apresentar.idade} anos`);

console.log(apresentacao);