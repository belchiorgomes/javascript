//typeof

function verificarTipo(valor){
    if(typeof valor === "number"){
        console.log("É um numero");
    }else if(typeof valor === "string"){
        console.log("É uma string")
    }else if (typeof valor === "boolean") {
        console.log("É um booleano");
    } else if (valor === null) {
        console.log("É nulo");
    } else if (typeof valor === "undefined") {
        console.log("É indefinido");
    } else if (Array.isArray(valor)) {
        console.log("É um array");
    } else {
        console.log("É um objeto");
    }
}

verificarTipo(43);
verificarTipo("Olá");
verificarTipo(true);
verificarTipo(null);
verificarTipo(undefined);
verificarTipo([1, 2, 3]);
verificarTipo({ nome: "João" });