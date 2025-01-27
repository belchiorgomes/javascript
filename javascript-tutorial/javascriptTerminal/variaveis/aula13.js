const tarefas = ["Limpar casa", "Lavar roupa", "Fazer almoço", "Arrumar cozinha"];

for(let a = 0; a < tarefas.length; a++){
    console.log(`Tarefa ${a + 1}: ${tarefas[a]}`);
}

console.log("---===---");

for(let tarefa of tarefas){
    console.log(tarefa);
}