"use strict";
// Estado dos elementos
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
const nav = document.querySelector("nav"); // Está selencionando a tag nav do HTML e atribuindo a uma variável chamada nav.
const buttonMenu = document.querySelector("button"); // Está selencionando o botão do HTML e atribuindo a uma variável chamada button.
