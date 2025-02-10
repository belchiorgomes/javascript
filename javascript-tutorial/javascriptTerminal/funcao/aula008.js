// Funções Geradoras em JavaScript

function* pares(limite){
    for(let a = 0; a <= limite; a += 2){
        yield a;
    }
}

const gerador = pares(10);

for(const numero of gerador){
    console.log(numero);
}