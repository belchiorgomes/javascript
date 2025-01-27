let dataAtual = new Date();
let diaSemana = dataAtual.getDay();
//console.log(diaSemana);

let diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
let hoje = diasDaSemana[diaSemana];
//console.log(`Hoje e ${hoje}`);

switch (hoje) {
    case 'Segunda':
    case 'Terça':
    case 'Quarta':
    case 'Qinta':
    case 'Sexta':
        console.log(`Hoje e ${hoje}, dia de ir trabalhar!`);
        break;
    case 'Sabado':
    case 'Domingo':
        console.log(`Hoje e ${hoje}, dia de folga, vamos descançar!`);
        break;
    default:
        console.log("Dia invalido");
}