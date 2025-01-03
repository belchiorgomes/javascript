let listaDeTarefas = {
    tarefas: [],
    adicionarTarefa: function(tarefa){
        this.tarefas.push(tarefa);
    },
    listaDeTarefas: function(){
        return this.tarefas;
    }
};

listaDeTarefas.adicionarTarefa("Estudar JavaScript");
listaDeTarefas.adicionarTarefa("Praticar exercícios");

console.log(listaDeTarefas.listaDeTarefas());
