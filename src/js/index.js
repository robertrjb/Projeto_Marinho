/* 
OBJETIVO 1 - quando o usuário clicar no botão de ver trailer, devemos abrir a modal com o video do trailer:

    -passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usuando o js

    -passo 2 - dar um jeito de identificar quando o usuário clicar no botão

    -passo 3 - dar um jeito de pegar o elemto da modal no js

    -passo 4 - abrir a modal na tela

OBJETIVO 2 - quando o usuário clicar no X devemos fechar a modal:

    -passo 1 - dar um jeito de pegar o elemento de fechar modal usando o js

    -passo 2 - dar um jeito de identificar quando o usuário clicar no X

    -passo 3 - fechar a modal

*/
/*OBJETIVO 1*/

const botaoTrailer = document.querySelector(".botao-trailer"); /*Estamos buscando a classe do botão*/

const modal = document.querySelector(".modal"); // pegando o elemento modal no js

const video = document.getElementById("video"); /*pegando o ID do video para apagar o scr quando o usuário clicar no botão fechar para parar de reproduzir o video*/

const BotaoFecharModal = document.querySelector(".fechar-modal") /*Buscando a classe para fechar o modal*/

 const linkDoVideo = video.src; /*indo no id video e pegando o src*/

 function alternarModal(){
    modal.classList.toggle("aberto");
 }

botaoTrailer.addEventListener("click", () => {
    alternarModal(); //chamando a função para abrir a modal
    video.setAttribute("src", linkDoVideo);//passando o link do src iframe

}); //identificando quando o usuário clicar no botao

/*OBJETIVO 2*/

BotaoFecharModal.addEventListener("click", () => {
    alternarModal(); //fechando o modal
    video.setAttribute("src", "");
});





