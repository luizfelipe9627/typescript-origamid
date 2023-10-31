"use strict";
//* > Tuples.
/*
  - Tuples são arrays que possuem dados em posições fixas.
*/
// Sem utilizar o tuples:
const produto1 = ["Notebook", 2000]; // Criado uma array chama produto1 que possui duas propriedades, sem definir o tipo de cada propriedade.
// Faz uma type guard para verificar se o primeiro elemento do array é uma string, se for executa o if.
if (typeof produto1[0] === "string") {
    console.log(produto1[0].toLowerCase()); // Converte a string para lowercase e exibe no console.
}
// Utilizando o tuples:
const produto2 = ["Notebook", 2000]; // Criado uma array chama produto2 que possui duas propriedades, já definindo o tipo de cada propriedade.
//* > as const.
/*
  - Torna um dado readonly e infere o tipo de dado mais específico possível. Em métodos que retornam Array's, as mesmas são transformadas em Tuples.
*/
