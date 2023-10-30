"use strict";
//* > Intersection.
/*
  - Funciona em parte como o extends para Interfaces, mas pode ser utilizado em Types.
*/
// Criado uma função chamada handleProduto que recebe um parâmetro chamado dados que é do tipo Produto & Carro, ou seja, é uma interseção entre os dois types.
function handleProdutoCarro(dados) {
    // Está acessando os atributos do objeto dados que é do tipo Produto & Carro.
    dados.preco;
    dados.rodas;
    dados.portas;
}
// Chama a função handleProduto passando um objeto que possui os atributos preco, rodas e portas.n
handleProdutoCarro({
    preco: 20000,
    rodas: 4,
    portas: 5,
});
function handleInterfaceCarro(carro) {
    // Está acessando os atributos do parâmetro carro que é do tipo InterfaceCarro.
    carro.portas;
    carro.preco;
    carro.portas;
}
window.userId = 200; // Adiciona uma propriedade userId ao objeto window.
console.log(window.userId); // Imprime no console o valor da propriedade userId do objeto window.
