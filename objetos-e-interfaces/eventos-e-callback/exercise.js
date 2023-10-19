"use strict";
//* > Exercício 1.
/*
  Menu inativo:
  - class="" em nav
  - aria-expanded="false" em button
  - aria-label="Abrir Menu" em button

  Menu ativo:
  - class="active" em nav
  - aria-expanded="true" em button
  - aria-label="Fechar Menu" em button
*/
const buttonMobile = document.getElementById("btn-mobile"); // Está selencionando o botão do HTML e atribuindo a uma variável chamada button.
// Criado uma função chamada toggleMenu que recebe um evento como parâmetro e o tipo do evento é PointerEvent, pois é um evento de click do mouse ou toque na tela.
function toggleMenu(event) {
    const nav = document.getElementById("nav"); // Está selencionando a tag nav do HTML e atribuindo a uma variável chamada nav.
    const button = event.currentTarget; // Está armazenando o elemento que está acionando o evento, que é o botão, em uma variável chamada button.
    // Se o button for uma referencia de HTMLElement, e nav existir, então ele executa o código abaixo.
    if (button instanceof HTMLElement && nav) {
        nav.classList.toggle("active"); // Está adicionando ou removendo a classe active da tag nav.
        const active = nav.classList.contains("active"); // Está armazenando em uma variável chamada active um valor boolean que indica se a tag nav contém a classe active ou não.
        // Se o valor de active for true, então ele executa o código abaixo.
        if (active) {
            // Está alterando os atributos aria-expanded e aria-label do botão.
            button.setAttribute("aria-expanded", "true");
            button.setAttribute("aria-label", "Fechar menu");
        }
        else {
            // Está alterando os atributos aria-expanded e aria-label do botão.
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-label", "Abrir menu");
        }
    }
}
buttonMobile?.addEventListener("pointerdown", toggleMenu); // Está adicionando um evento de pointerdown, ou seja de click do mouse ou toque na tela no botão, executando a função toggleMenu quando o evento é acionado.
