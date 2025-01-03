/*
document.getElementById('meuBotao').addEventListener('click', function(){
    alert('Botão clicado!')
})
*/

//Manipuladores de eventos com Funções Nomeadas

/*
function btn(){
    alert('Botao clicado!');
}

document.getElementById('meuBotao').addEventListener('click', btn);
*/

//Removendo um ouvinte de evento

/*
function btn(){
    alert('Botão clicado!');
}

const botao = document.getElementById('meuBotao');
botao.addEventListener('click', btn);

setTimeout(()=>{
    botao.removeEventListener('click', btn);
    alert('Ouvinte de evento removido.');
}, 5000);
*/

//Fase de Captura vs. Fase de Propagação

document.getElementById('meuBotao').addEventListener('click', function() {
    alert('Capturado na fase de propagação');
}, false);

document.getElementById('meuBotao').addEventListener('click', function() {
    alert('Capturado na fase de captura');
}, true);