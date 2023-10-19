"use strict";
//* > Generics.
// Criado uma função chamada retorno que armazena uma variável(<>) do tipo genérico chamada T, que recebe um parâmetro chamado a do tipo armazenado na variável T e retorna o valor de a seguindo o tipo armazenado na variável T.
function retorno(a) {
    return a;
}
// Utilizando a variável T o TypeScript vai saber que tipo de dado será retornado, assim podendo nos dar acesso aos métodos e propriedades do tipo de dado retornado.
console.log(retorno(123)); // Executa a função retorno já passando o tipo de dado que será retornado, sendo assim o tipo da variável T será number e o retorno será 123 no console.
console.log(retorno("God of War")); // Executa a função retorno passando o valor "God of War" como parâmetro, sendo assim o tipo da variável T será string e o retorno será "God of War" no console.
console.log(retorno(true)); // Executa a função retorno passando o valor true como parâmetro, sendo assim o tipo da variável T será boolean e o retorno será true no console.
//* > Generics em Arrays.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Cria uma variável chamada numeros que armazena um array de números.
const frutas = ["Maçã", "Banana", "Laranja", "Pêra", "Uva", "Limão"]; // Cria uma variável chamada frutas que armazena um array de strings.
// Criado uma função chamada firstFive que armazena uma variável(<>) do tipo genérico chamada T, que recebe um parâmetro chamado list do tipo armazenado na variável T em array e retorna uma array.
function firstFive(list) {
    return list.slice(0, 5); // Retorna os 5 primeiros valores do array.
}
// Utilizando a variável T o TypeScript vai saber que tipo de dado será retornado, assim podendo nos dar acesso aos métodos e propriedades do tipo de dado retornado.
console.log(firstFive(numeros)); // Executa a função firstFive passando o array numeros como parâmetro, sendo assim o tipo da variável T será number e o retorno será [1, 2, 3, 4, 5] no console.
console.log(firstFive(frutas)); // Executa a função firstFive passando o array frutas como parâmetro, sendo assim o tipo da variável T será string e o retorno será ["Maçã", "Banana", "Laranja", "Pêra", "Uva"] no console.
//* > Generics em Funções.
// Criado uma função chamada notNull que armazena uma variável(<>) do tipo genérico chamada T, que recebe um parâmetro chamado arg do tipo armazenado na variável T.
function notNull(arg) {
    // Se o parâmetro arg for diferente de null executa o if, caso contrário executa o else.
    if (arg !== null) {
        return arg;
    }
    else {
        return null;
    }
}
console.log(notNull("Luiz")?.toLowerCase()); // Executa a função notNull passando o valor "Luiz" como parâmetro, sendo assim o tipo da variável T será string, o toLowerCase() só será executado se o valor não for null, caso contrário será retornado null no console.
console.log(notNull(200)?.toFixed(2)); // Executa a função notNull passando o valor 200 como parâmetro, sendo assim o tipo da variável T será number, o toFixed(2) só será executado se o valor não for null, caso contrário será retornado null no console.
// Criado uma função chamada typeData que armazena uma variável(<>) do tipo genérico chamada T, que recebe um parâmetro chamado a do tipo armazenado na variável T.
function typeData(a) {
    // Cria uma variável chamada result que armazena um objeto com duas propriedades.
    const result = {
        data: a,
        type: typeof a, // Cria uma propriedade chamada type que armazena o tipo do parâmetro a.
    };
    return result; // Retorna o objeto result no console.
}
console.log(typeData(200)); // Executa a função typeData passando o valor "Luiz" como parâmetro, sendo assim o tipo da variável T será string e mostra o retorno no console.
//* > Extends.
// Criado uma função chamada extractText que armazena uma variável(<>) do tipo genérico chamada T essa variável T extende o tipo HTMLElement, ou seja, só pode receber um elemento HTML como parâmetro que irá herdar os métodos e propriedades do tipo HTMLElement, que recebe um parâmetro chamado el do tipo armazenado na variável T.
function extractText(el) {
    return {
        text: el.innerHTML,
        el, // Armazena o elemento HTML.
    };
}
const link = document.querySelector("a");
// Para o link não ser null, é necessário fazer uma verificação. Se existir executa o if.
if (link) {
    console.log(extractText(link).el.href); // Executa a função extractText passando o elemento HTML como parâmetro e mostra no console o valor da propriedade href do elemento HTML presente no objeto retornado pela função.
}
