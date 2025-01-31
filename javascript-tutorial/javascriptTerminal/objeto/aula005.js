/* Como funcionam as propriedades:

Nome e valor: Cada propriedade tem um nome (uma string ou símbolo) que a identifica e um valor associado a ela. O valor pode ser qualquer tipo de dado JavaScript: números, strings, booleanos, arrays, funções (métodos), outros objetos, etc.

Acesso: Você pode acessar o valor de uma propriedade usando a notação de ponto (objeto.nomeDaPropriedade) ou a notação de colchetes (objeto["nomeDaPropriedade"]).

Modificação: Você pode alterar o valor de uma propriedade a qualquer momento, atribuindo um novo valor a ela.
*/

const Pessoa = {
    nome: "Bruna",
    idade: 30,
};

console.log(Pessoa.nome);
console.log(Pessoa["idade"]);

Pessoa.nome = "Raquel"; //Modifica o valor
console.log(Pessoa.nome);