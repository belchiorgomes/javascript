function Pessoa(nome, idade){
    this.nome = nome;
    this.idad = idade;
    this.apresentacao = function() {
        console.log(`Eu me chamo ${nome} e tenho ${idade} anos, muito prazer em conhecelo`);
    };
}

const pessoa01 = new Pessoa('Vanesa', 31);
pessoa01.apresentacao();