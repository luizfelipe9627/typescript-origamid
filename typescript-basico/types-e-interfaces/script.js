"use strict";
//* > Object.
// Criado uma função chamada preencherDados que recebe um objeto do tipo Produto.
function preencherDados(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? "Sim" : "Não"}</p>
  </div>
  `;
}
// Está criado duas constantes chamada computador e notebook que recebe um objeto com os tipos de dados definidos no type Produto.
const computador = {
    nome: "Computador",
    preco: 2000,
    teclado: true,
};
const notebook = {
    nome: "Notebook",
    preco: 4000,
    teclado: false,
};
// Chama a função preencherDados passando o objeto computador e notebook como parâmetro.
preencherDados(computador);
preencherDados(notebook);
let total = 10; // Criado uma variável chamada total que recebe o valor 10. O type NumberOrString está falando que o valor pode ser do tipo number ou string.
total = "50"; // A variável total recebe o valor 50.
// Criado uma função chamada pintarCategoria que recebe um parâmetro do tipo Categorias.
function pintarCategoria(categoria) {
    // Se o valor da variável categoria for igual a design, irá imprimir no console a mensagem "Pintar de vermelho".
    if (categoria === "design") {
        console.log("Pintar de vermelho");
    } // Se não, se o valor da variável categoria for igual a codigo, irá imprimir no console a mensagem "Pintar de azul".
    else if (categoria === "codigo") {
        console.log("Pintar de azul");
    } // Se não, se o valor da variável categoria for igual a descod, irá imprimir no console a mensagem "Pintar de roxo".
    else if (categoria === "descod") {
        console.log("Pintar de roxo");
    }
}
pintarCategoria("design"); // Passando o valor design para a função pintarCategoria.
