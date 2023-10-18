"use strict";
//* > Exercício 1.
/*
  1. Selecione os elementos com a classe link.
  2. Crie uma função que deve ser executada para cada elemento.
  3. Modificar através da função o estilo da color e border.
*/
const todosLinks = document.querySelectorAll(".link"); // Seleciona todos os elementos que possuem a classe link e armazena em links.
// Cria uma função que recebe um parâmetro do tipo HTMLElement que contém a propriedade style. E que refencia o tanto o tipo HTMLAnchorElement quanto o HTMLButtonElement.
function ativarElemento(elemento) {
    // Modifica o estilo do elemento.
    elemento.style.color = "red";
    elemento.style.border = "2px solid red";
}
// Percorre todos os elementos que tiverem a classe link na NodeList.
todosLinks.forEach((link) => {
    // console.log(link.__proto__); // Motra no console o protótipo do link, que é o HTMLAnchorElement e o HTMLButtonElement.
    // console.log(link.__proto__.__proto__); // Mostra no console o protótipo do protótipo do link, que é o HTMLElement.
    // Se o elemento link referenciar/instanciar o tipo HTMLAnchorElement ou HTMLButtonElement presente dentro do tipo HTMLElement, executa o if.
    if (link instanceof HTMLElement) {
        ativarElemento(link); // Chama a função ativarElemento e passa o link como argumento.
    }
});
