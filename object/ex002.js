const carro = {
    modelo: 'Uno',
    ano: 2023,
    km: 10000,
    combustivel: 'Gasolina',
    litrosConsumidos: 625
};

carro.marca = 'Fiat';

let mediaCombustivel = carro.km / carro.litrosConsumidos;

console.log(`O carro ${carro.modelo} ${carro.ano} fez em media ${mediaCombustivel} Km/L de ${carro.combustivel}`);

console.log(`A marca do carro é ${carro.marca} ${carro.modelo}`);