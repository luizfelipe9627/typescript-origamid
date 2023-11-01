"use strict";
//* > Exerício 1
/*
  1. Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json.
  2. Defina o tipo/interface de cada venda (tuple).
  3. Some o total das vendas e mostre na tela.
*/
// Função chamada fetchVendas responsável por fazer uma requisição para a API e retornar um objeto. O async está tornando a função assíncrona, ou seja, ela vai esperar os await serem resolvidos para depois retornar o valor.
async function fetchVendas() {
    // O await está falando para esperar as respostas das requisições para depois armazenar o retorno na variável.
    const response = await fetch("https://api.origamid.dev/json/vendas.json"); // Faz uma requisição para a url da api e armazena o retorno(a resposta) na variável response.
    const data = await response.json(); // Converte o retorno da requisição para json e armazena na variável data.
    return somarVendas(data); // Retorna a função somarVendas passando o valor da variável data como parâmetro.
}
fetchVendas();
function somarVendas(vendas) {
    //* > Utilizando o for:
    let total1 = 0; // Criado uma variável chamada total1 do tipo number e atribuido o valor 0.
    // O for recebe um inciciador com o valor 0, uma condição que verifica se o valor do inciciador é menor que o tamanho do array vendas e se for executa o for, e um incrementador que incrementa o valor do inciciador em 1.
    for (let i = 0; i < vendas.length; i++) {
        total1 += vendas[i][1]; // Acessa o array vendas na posição i(array atual) e na posição 1(posição do preço) e soma com o valor da variável total1.
    }
    document.body.innerHTML = `<h1>Total de vendas: R$ ${total1}</h1>`; // Exibe no body o valor da variável total1 dentro de uma tag h1.
    //* > Utilizando o reduce:
    // Está sendo utilizado o reduce para somar os valores do array vendas, o reduce recebe uma função que recebe dois parâmetros, o primeiro é o valor anterior e o segundo é o valor atual. Começa com o valor 0.
    const total2 = vendas.reduce((anterior, atual) => {
        return anterior + atual[1]; // Retorna o valor anterior somado com o valor atual na posição 1(posição do preço).
    }, 0);
    console.log(total2);
    document.body.innerHTML = `<h1>Total de vendas: R$ ${total2}</h1>`; // Exibe no body o valor da variável total2 dentro de uma tag h1.
}
