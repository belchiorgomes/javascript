const apresentarUsuario = (nome, idioma = "Portugues") =>{
    return `Olá ${nome}, seja bem vindo ao sistema em ${idioma}`;
};

console.log(apresentarUsuario('Breno', 'Inglês'));
console.log(apresentarUsuario('Bruna'));