"use strict";
//* > Declarando functions.
/*
  A interface de uma função é definida durante a sua declaração.
*/
// Criado uma função chamada somar que recebe três parâmetros do tipo number sendo que o último é opcinal, e retorna um tipo number.
// Em function usamos o operador "?" para indicar que o parâmetro é opcional.
function somar(a, b, c) {
    return a + b + (c ? c : 0); // Retorna a soma dos três parâmetros, sendo que o terceiro se for usado, será somado, caso contrário será somado 0.
}
console.log(somar(1, 2, 5)); // Chamando a função somar e passando dois parâmetros do tipo number.
// Criado uma função chamada subtrair que recebe dois parâmetros do tipo number.
const subtrair = (a, b) => {
    return a - b; // Retorna a subtração dos dois parâmetros.
};
console.log(subtrair(10, 5));
// Criado uma função chamada pintarTela que recebe um parâmetro do tipo string e não retorna nada(void).
function pintarTela(cor) {
    document.body.style.backgroundColor = cor; // Muda a cor de fundo do body para a cor passada como parâmetro.
}
console.log(pintarTela("#C9C9C9")); // Chama a função pintarTela e passando a cor #C9C9C9 como parâmetro. No console será mostrado undefined, pois a função não retorna nada, sendo assim o tipo de retorno é void.
const btn = document.querySelector("button"); // Seleciona o elemento button e armazena na variável btn.
// O operador ? é chamado de optional chaining, ele verifica se o objeto existe antes de acessar a propriedade, se não existir ele não executa o código seguinte.
btn?.click(); // O método click por exemplo, não retorna nada, sendo seu tipo void.
function isString(value) {
    // Se o tipo de value for string executa o if.
    if (typeof value === "string") {
        return true; // Retorna true.
    }
}
console.log(isString("Morango")); // Chama a função isString e passando a string "teste" como parâmetro. No console será mostrado true, pois a função retorna true.
console.log(isString(10)); // Chama a função isString e passando o number 10 como parâmetro. No console será mostrado undefined, pois a função não retorna nada, sendo assim o tipo de retorno é void.
//* > Never.
/*
  O never é utilizado em casos onde a função gera um erro ou termina a aplicação.
*/
// Criado uma função chamada abortar que recebe uma mensagem do tipo string e retorna um tipo never(que nunca retorna nada).
function abortar(mensagem) {
    throw new Error(mensagem); // Gera um erro com a mensagem passada no parâmetro.
}
// Criado uma função chamada calcularQuadrado que recebe um parâmetro chamado forma do tipo Quadrado e que retorna um tipo number.
function calcularQuadrado(forma) {
    return forma.perimetro(3); // Retorna o resultado do método perimetro passando o número 3 como parâmetro.
}
// Criado uma função chamada normalizar que recebe um parâmetro do tipo string uma array de string e retorna um tipo string ou  array de string.
function normalizar(valor) {
    // Se o tipo de valor for string executa o if, caso contrário executa o else.
    if (typeof valor === "string") {
        return valor.toLowerCase().trim(); // Retorna o valor passado como parâmetro em caixa alta e sem os espaços no início e no fim.
    }
    else {
        return valor.map((item) => item.trim().toLowerCase()); // Retorna um array com os valores passados como parâmetro em caixa alta e sem os espaços no início e no fim.
    }
}
// Com o overload ele sabe qual função chamar dependendo do tipo de dado passado como parâmetro. Se for string chama a primeira função, se for array de string chama a segunda função.
console.log(normalizar("   PrOdUtO   ")); // Chama a função normalizar e passando a string "   PrOdUtO   " como parâmetro. No console será mostrado "produto".
console.log(normalizar([" BAnaNa", "MAçã", "   MELANCIA"])); // Chama a função normalizar e passando um array de string como parâmetro. No console será mostrado ["banana", "maçã", "melancia"].
// Criado uma função overload chamada $ que recebe um parâmetro do tipo string e retorna um tipo Element ou null.
// Mesmo as funções sendo overload, elas devem ser compatíveis com a função original(o tipo de retorno deve ser o mesmo), no caso Element ou null e o tipo de dado do parâmetro deve ser o mesmo, no caso string.
function $(seletor) {
    return document.querySelector(seletor); // Retorna o elemento selecionado pelo seletor passado como parâmetro.
}
// Usando o overload ele sabe qual função chamar dependendo do tipo de dado passado como parâmetro. Se for "a" chama a primeira função, se for string chama a segunda função.
$("a")?.href; // Chama a função $ e passando o seletor "a" como parâmetro e acessa a propriedade href se o elemento existir(for diferente de null).
$("video")?.volume; // Chama a função $ e passando o seletor "video" como parâmetro e acessa a propriedade volume se o elemento existir(for diferente de null).
$(".item");
