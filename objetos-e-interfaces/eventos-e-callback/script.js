"use strict";
//* > Eventos.
const button = document.querySelector("button"); // Está selencionando o botão do HTML e atribuindo a uma variável chamada button.
// Criado uma função chamada handleClick1 que recebe um evento como parâmetro e o tipo do evento é MouseEvent, pois é um evento de click.
function handleClick1(event) {
    // console.log(event); // Está imprimindo o evento no console.
}
// O operador ? é chamado de optional chaining, ele verifica se o objeto existe antes de acessar a propriedade, se não existir ele não executa o código seguinte.
button?.addEventListener("click", handleClick1); // Está adicionando um evento de click ao botão e executando a função handleClick quando o evento é acionado.
// Criado uma função chamada handleScroll que recebe um evento como parâmetro e o tipo do evento é Event, pois é o tipo de evento de scroll.
function handleScroll(event) {
    // console.log(event); // Está imprimindo o evento no console.
}
window.addEventListener("scroll", handleScroll); // Está adicionando um evento de scroll na página e executando a função handleScroll quando o evento é acionado..
//* > Event e Instanceof.
// Criado uma função chamada ativarMenu que recebe um evento como parâmetro e o tipo do evento é Event, pois contém os eventos de mouse e touch.
function ativarMenu(event) {
    // Se o evento for uma referencia de MouseEvent dentro do Event, então ele executa o código abaixo.
    if (event instanceof MouseEvent) {
        // console.log(event.clientX, event.clientY); // Está imprimindo as coordenadas do mouse no console.
    } // Se não, se o evento for uma referencia de TouchEvent dentro do Event, então ele executa o código abaixo.
    else if (event instanceof TouchEvent) {
        // console.log(event.touches[0].clientX, event.touches[0].clientY); // Está imprimindo as coordenadas do toque na tela no console.
    }
}
document.documentElement.addEventListener("mousedown", ativarMenu); // Está adicionando um evento de click do mouse na página e executando a função ativarMenu quando o evento é acionado.
document.documentElement.addEventListener("touchstart", ativarMenu); // Está adicionando um evento de toque na tela na página e executando a função ativarMenu quando o evento é acionado.
//* > This.
const link = document.querySelector("a"); // Está selencionando o link do HTML e atribuindo a uma variável chamada link.
// Criado uma função chamada handleClick2 que como primeiro parâmetro recebe o this que é o elemento que está acionando o evento e como segundo parâmetro recebe o evento que é do tipo MouseEvent.
function handleClick2(event) {
    console.log(this); // Mostra no console o elemento que está sendo clicado.
}
// O operador ? é chamado de optional chaining, ele verifica se o objeto existe antes de acessar a propriedade, se não existir ele não executa o código seguinte.
link?.addEventListener("click", handleClick2); // Está adicionando um evento de click no link e executando a função handleClick2 quando o evento é acionado.
// Criado uma função chamada handleClick3 que recebe o evento do tipo MouseEvent como parâmetro.
function handleClick3(event) {
    const elemento = event.currentTarget; // Armazena o elemento que está acionando o evento na variável elemento.
    // Por padrão o currentTarget é do tipo EventTarget, sendo assim não vai ter como manipular o elemento HTML, então é necessário fazer uma verificação para saber se o elemento é do tipo HTMLElement.
    if (elemento instanceof HTMLElement) {
        console.log(elemento.innerHTML); // Mostra no console o conteúdo do elemento que está sendo clicado.
    }
}
// O operador ? é chamado de optional chaining, ele verifica se o objeto existe antes de acessar a propriedade, se não existir ele não executa o código seguinte.
link?.addEventListener("click", handleClick3); // Está adicionando um evento de click no link e executando a função handleClick3 quando o evento é acionado.
