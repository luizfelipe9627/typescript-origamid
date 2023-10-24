"use strict";
//* > Array.
/*
  Uma array não pode ser verificada com o typeof pois a mesma é um object. Podemos verificar se o dado é instanceof Array ou podemos usar a função Array.isArray().
*/
// Função chamada fetchCursos responsável por fazer uma requisição para a API e retornar um objeto. O async está tornando a função assíncrona, ou seja, ela vai esperar os await serem resolvidos para depois retornar o valor.
async function fetchCursos() {
    // O await está falando para esperar as respostas das requisições para depois armazenar o retorno na variável.
    const response = await fetch("https://api.origamid.dev/json/cursos.json"); // Faz uma requisição para a url da api e armazena o retorno(a resposta) na variável response.
    const json = await response.json(); // Transforma a resposta em um objeto JSON e armazena o retorno na variável json.
    handleCursos(json); // Executa a função handleCursos passando o objeto json como parâmetro.
}
// Criado uma função chamada handleCursos que recebe um parâmetro do tipo unknown, ou seja, não sabemos o tipo de dado que será passado e por isso ele só irá permitir o uso de métodos quando a Type Safety estiver garantida.
function handleCursos(data) {
    // Está usando uma Type Guard para verificar se o tipo de dado é uma instância/referência de Array. Está garantindo a Type Safety ou seja, o TypeScript sabe que o tipo de dado é uma Array se for true.
    if (data instanceof Array) {
        console.log("É uma instância de Array.");
    }
    // Está usando uma Type Guard para verificar se o tipo de dado é uma Array. Está garantindo a Type Safety ou seja, o TypeScript sabe que o tipo de dado é uma Array se for true.
    if (Array.isArray(data)) {
        console.log("É uma Array.");
    }
}
fetchCursos(); // Chama a função fetchCursos.
//* > Type Predicate.
/*
  Sabemos já que o TS não executa o JS durante a checagem dos tipos. Se isso ocorre, então como a função `**isArray`** consegue ser usada como Type Guard?
  Com o Type Predicate `**:arg is type**`, podemos indicar qual o tipo de argumento uma função booleana (que retorna boolean) recebeu para ser verdadeira.
*/
// Criado uma função chamada isString que recebe um parâmetro chamado value do tipo unknown que retorna um boolean, com o uso do is ele está dizendo que o tipo de dado que será retornado é um boolean e se for true ele está dizendo que o tipo de dado que será retornado é uma string.
function isString(value) {
    return typeof value === "string"; // Retorna true se o tipo de dado for string.
}
// Criado uma função chamada handleData que recebe um parâmetro chamado data do tipo unknown, ou seja, não sabemos o tipo de dado que será passado e por isso ele só irá permitir o uso de métodos quando a Type Safety estiver garantida.
function handleData(data) {
    // Está usando uma Type Guard para verificar se o tipo de dado é uma string. Está garantindo a Type Safety ou seja, o TypeScript sabe que o tipo de dado é uma string se for true.
    if (isString(data)) {
        data.toLowerCase(); // Converte a string para tudo minúscula.
    }
}
handleData("Olá!"); // Chama a função handleData passando uma string como parâmetro.
//* > Objetos.
/*
  O Type Predicate pode ser especialmente utilizado para criarmos Type Guards para objetos específicos e garantirmos a Type Safety (segurança) do projeto.
*/
// Função chamada fetchProduto responsável por fazer uma requisição para a API e retornar um objeto. O async está tornando a função assíncrona, ou seja, ela vai esperar os await serem resolvidos para depois retornar o valor.
async function fetchProduto() {
    // O await está falando para esperar as respostas das requisições para depois armazenar o retorno na variável.
    const response = await fetch("https://api.origamid.dev/json/notebook.json"); // Faz uma requisição para a url da api e armazena o retorno(a resposta) na variável response.
    const json = await response.json(); // Transforma a resposta em um objeto JSON e armazena o retorno na variável json.
    handleProduto(json); // Executa a função handleProduto passando o objeto json como parâmetro.
}
// Criado uma user type guard chamada isProduto que recebe um parâmetro chamado value do tipo unknown que retorna um boolean, com o uso do is se for true ele está dizendo que o tipo de dado que será retornado é do tipo Produto que é uma interface.
function isProduto(value) {
    // Verifica se o value existe e se o tipo de dado é um objeto e se o objeto possui as propriedades nome e total, se for true em todas executa o if, se não executa o else.
    if (value &&
        typeof value === "object" &&
        "nome" in value &&
        "total" in value) {
        return true;
    }
    else {
        return false;
    }
}
//
function handleProduto(value) {
    if (isProduto(value)) {
        console.log(value.nome);
    }
}
fetchProduto(); // Chama a função fetchProduto.
