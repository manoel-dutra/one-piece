window.alert('ola me chamo manoel dutra meu contato ( 91) 9217-4874')

const botoes = document.querySelectorAll('.botao');

const personagem = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaoselecionado = document.querySelector(".botao.selecionado");
        botaoselecionado.classList.remove("selecionado")


        botao.classList.add("selecionado");


        const personagemselecionado = document.querySelector(".personagem.selecionado");
        personagemselecionado.classList.remove("selecionado")


        personagem[indice].classList.add("selecionado")
        
    });
});
 

