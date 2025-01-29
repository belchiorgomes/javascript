function somarArray(array){
    let somar = 0;
    for(let a = 0; a < array.length; a++){
        somar += array[a];
    }
    return somar;
};

let numeros = [1, 2, 3, 4, 5];
console.log(somarArray(numeros));

// Função de seta equivalente
const somarArray2 = (array) => {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
      soma += array[i];
    }
    return soma;
  };

let numeros2 = [1, 2, 3, 4, 5];
console.log(somarArray(numeros2));