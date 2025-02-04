const myHeading = document.querySelector("h1");//Seleciona o elemento h1
myHeading.textContent = "Olá mundo!";// Escre no documento html


// addEventListener e um evento

/*
    A função que acabamos de passar para addEventListener() aqui é chamada de função anônima, porque não tem um nome. Existe uma maneira alternativa de escrever funções anônimas, que chamamos de função de seta. Uma função de seta usa () => em vez de function ():
*/

/*
document.querySelector("html").addEventListener("click", function(){
    alert("Ai! Pare de me cutucar!");
})
*/

document.querySelector("html").addEventListener("click", () => {
    alert("Ai! Pare de me cutucar!");
})