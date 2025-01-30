const produto = {
    nomeProduto: "Camiseta",
    marca: "Marca x",
    preco: 125,
    tamanho: ["P", "M", "G"],
    cor: ["Branca", "Preta", "Cinza"],
    avaliacao: [
        {usuario: "Joana", nota: 5, comentario: "Produto muito bom"},
        {usuario: "Cintia", nota: 7, comentario: "Produto checou no prazo"}
    ]
};

console.log(produto.nomeProduto);
console.log(produto.marca);
console.log(produto.preco);
console.log(produto.tamanho[1]);
console.log(produto.cor[0]);
console.log(produto.avaliacao[1].comentario);