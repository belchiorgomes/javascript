const diaAtual = new Date();
const diasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"];
const diaSemanaAtual = diaAtual.getDay();

console.log(`Hoje é ${diasSemana[diaSemanaAtual]}`);

