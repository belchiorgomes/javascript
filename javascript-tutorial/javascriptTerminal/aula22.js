let diaSemana = new Date();
let dia = diaSemana.getDate();

switch(dia){
    case "Segunda" :
    case "Terça" :
    case "Quarta" :
    case "Quinta" :
    case "Sexta" :
        console.log("Dia util da semana");
        break;
    case "Sabado" :
    case "Domingo" :
        console.log("Final de semana");
        break;
    default:
        console.log("Dia da semana invalida");
}