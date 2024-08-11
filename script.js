/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    
passo 1 - dar um jeito de pegar o elemento HTML dos botões
passo 2 - dar um jeito de identificar o clique do usuário no botão
passo 3 - desmarcar o botão selecionado anterior
passo 4 - marcar o botão clicado como se estivesse selecionado
passo 5 - esconder a imagem anteriormente selecionada
passo 6 - fazer aparecer a imagem correspondente ao botão clicado
passo 7 - esconder a informação do dragão anteriormente selecionado
passo 8 - mostrar a informação do dragão referente ao botão clicado
*/


//passo 1 - dar um jeito de pegar o elemento HTML dos botões
/*console.log(document.querySelectorAll(".button"));*/
const carrosselButton = document.querySelectorAll(".button");
const images = document.querySelectorAll(".image");
const info = document.querySelectorAll(".info")
//passo 2 - dar um jeito de identificar o clique do usuário no botão

carrosselButton.forEach((button, index) => {
    
    button.addEventListener("click", () => {
        /*console.log("cliked")*/

        //passo 3 - desmarcar o botão selecionado anterior
        const selectedButton = document.querySelector(".selected")

        /*console.log(selectedButton.classList);*/
        selectedButton.classList.remove("selected")

        //4 - marcar o botão clicado como se estivesse selecionado

        button.classList.add("selected");

        //5 - esconder a imagem anteriormente selecionada

        const imageActive = document.querySelector(".active");
        imageActive.classList.remove("active")

        //passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        
        images[index].classList.add("active");

        //passo 7 - esconder a informação do dragão anteriormente selecionado

        const infoActive = document.querySelector(".info.active");
        infoActive.classList.remove("active");

        //passo 8 - mostrar a informação do dragão referente ao botão clicado
         
        info[index].classList.add("active");



    });
});
