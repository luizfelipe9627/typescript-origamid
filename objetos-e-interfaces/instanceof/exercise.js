"use strict";
//* > Exercício 1
/*
  1. Selecione o link utilizando o método getElementById.
  2. Substitua o href do link (HTMLAnchorElement) de http:// para https://.
*/
const link = document.getElementById("origamid"); // Está puxando o elemento do HTML pelo ID e armazenando na variável link.
// Se o link for uma instância/refêrencia de HTMLAnchorElement, ele executa o if.
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace("http://", "https://"); // Selectiona o href do link e substitui o http:// por https://.
}
