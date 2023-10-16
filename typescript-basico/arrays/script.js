"use strict";
//* > Arrays.
const numeros = [10, 20, 30, 40, 50, 3]; // Criado um array chamado numeros com elementos do tipo number.
const valores = [42, "Produto", 123, "Desconto", 3, 0]; // Criado um array chamado valores com elementos de tipos diferentes.
// Criado uma função chamada maiorQue10 que recebe um parâmetro chamado data que pode receber um array de números.
function maiorQue10(data) {
    return data.filter((n) => n > 10); // O filter passa por cada elemento do array e retorna um novo array com os elementos que passaram no teste, no caso, os elementos maiores que 10.
}
console.log(maiorQue10(numeros)); // Executa a função e imprime o resultado no console.
// Criado uma função chamada filtrarValores que recebe um parâmetro chamado data que pode receber um array de strings ou números.
function filtrarValores(data) {
    return data.filter((item) => typeof item === "number"); // O filter passa por cada elemento do array e retorna um novo array com os elementos que passaram no teste, no caso, os elementos que do tipo number.
}
console.log(filtrarValores(valores)); // Executa a função e imprime o resultado no console.
//* > Sintaxe alternativa.
const dados = ["Senhor dos anéis", 29.99, true]; // Criado um array chamado dados com elementos de tipos diferentes.
// Criado uma função chamada filterDados que recebe um parâmetro chamado data que pode receber um array de strings, números ou booleanos.
function filterDados(data) {
    return data.filter((item) => typeof item === "boolean"); // O filter passa por cada elemento do array e retorna um novo array com os elementos que passaram no teste, no caso, os elementos que do tipo boolean.
}
console.log(filterDados(dados)); // Executa a função e imprime o resultado no console.
