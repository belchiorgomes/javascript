// const myHeader = document.querySelector("h1");
// myHeader.textContent = "Olá Mundo!";

const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/firefox-icon.png"){
        myImage.setAttribute("src", "images/google-icon.png");
    }else{
        myImage.setAttribute("src", "images/firefox-icon.png");
    }
};

let myButton = document.querySelector("Button");
let myHeading = document.querySelector("h1");

/*
    A função setUserName() contém uma função prompt(), que exibe uma caixa de diálogo, semelhante a alert(). Esta função prompt() faz mais do que alert(), solicitando ao usuário que insira dados e armazenando-os em uma variável após o usuário clicar em OK. Neste caso, estamos solicitando que o usuário insira um nome. Em seguida, o código chama uma API localStorage, que nos permite armazenar dados no navegador e recuperá-los posteriormente. Usamos a função setItem() do localStorage para criar e armazenar um item de dados chamado 'name', configurando seu valor para a variável myName que contém a entrada do usuário para o nome. Por fim, definimos o textContent do cabeçalho como uma string, mais o nome do usuário recém-armazenado.
*/

setUserName = () => {
    const myName = prompt("Por favor, digite o seu nome");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla é legal, ${myName}`;
}

/*
    Esta primeira linha deste bloco utiliza o operador de negação (NOT lógico, representado pelo !) para verificar se os dados nome existem. Caso contrário, a função setUserName() é executada para criá-lo. Se existir (ou seja, o usuário definiu um nome de usuário durante uma visita anterior), recuperamos o nome armazenado usando getItem() e definimos o textContent do cabeçalho como uma string, mais o nome do usuário, conforme fez dentro de setUserName().
*/

if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla é legal, ${storedName}`;
}

/*
Coloque este manipulador de evento onclick (abaixo) no botão. Quando clicado, setUserName() é executado. Isso permite que o usuário insira um nome diferente pressionando o botão.
*/

myButton.onclick = () => {
    const myName = prompt("Por favor digite o seu nome.");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla é legal, ${myName}`;
    }
}