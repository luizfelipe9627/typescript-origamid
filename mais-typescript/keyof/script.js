"use strict";
//* > keyof.
/*
  - Indica que o dado é uma chave de uma Interface/Tipo.
*/
let chave; // Cria uma variável que recebe as chaves da interface Produto, ou seja, nome, preco e novo.
chave = "nome"; // Chama a variável e seleciona a chave nome.
//* > typeof.
/*
  - Já vimos o typeof do JavaScript, responsável por retornar o tipo do dado. No TypeScript podemos utilizar ele para indicar que um dado possui o mesmo tipo que outro.
*/
// Criado uma função que recebe dois parâmetros do tipo number.
function coordenadas(x, y) {
    return { x, y }; // Retorna um objeto com as propriedades x e y.
}
let coord; // Cria uma variável chamada coord que recebe o tipo da função coordenadas, sendo assim, coord também é uma função que recebe dois parâmetros do tipo number.
// coord = "teste"; // Dá erro, pois coord é uma função que recebe dois parâmetros do tipo number.
// Agora dá certo, pois coord é uma função que recebe dois parâmetros do tipo number.
coord = (x, y) => {
    return { x, y };
};
// Criado uma função chamada selecionar que é do tipo genérico, criando uma variável chamada Chave que extende o tipo Elementos, ou seja, Chave só pode receber uma das chaves da interface Elementos, que recebe um parâmetro chamado seletor do tipo armazenado na variável Chave e retorna um elemento HTML do tipo armazenado na variável Elementos ou null.
function selecionar(seletor) {
    return document.querySelector(seletor); // Retorna o elemento HTML que corresponde ao elemento passado como parâmetro.
}
selecionar("a")?.href; // Chama a função selecionar passando o valor "a" como parâmetro e dando acesso as propriedades do tipo HTMLAnchorElement.
selecionar("video")?.volume; // Chama a função selecionar passando o valor "video" como parâmetro e dando acesso as propriedades do tipo HTMLVideoElement.
//* > checkInterface
/*
  - O keyof pode ser utilizado para criarmos funções genéricas utilitárias.
*/
// Criado uma função chamada fetchData que armazena uma variável(<>) do tipo genérico chamada T, que recebe um parâmetro chamado url do tipo string que retorna uma Promise do tipo armazenado na variável T. O async está tornando a função assíncrona, ou seja, ela vai esperar os await serem resolvidos para depois retornar o valor.
async function fetchData(url) {
    const base = "https://api.origamid.dev/json/"; // Armazena a url base da api na variável base.
    // O await está falando para esperar as respostas das requisições para depois armazenar o retorno na variável.
    const response = await fetch(base + url); // Faz uma requisição para a base + url passada como parâmetro e armazena o retorno(a resposta) na variável response.
    return await response.json(); // Transforma a resposta em um objeto JSON e retorna o objeto JSON.
}
// Cria uma função type guard chamada checkJogo que recebe um parâmetro chamado objeto do tipo unknown e retorna um booleano. O is verifica se o objeto for do tipo Jogo, se sim retorna true, se não, retorna false.
function checkJogo(objeto) {
    // Se o objeto existir, for do tipo objeto e possuir as propriedades nome, ano, desenvolvedora e plataformas na interface Jogo executa o if.
    if (objeto &&
        typeof objeto === "object" &&
        "nome" in objeto &&
        "ano" in objeto &&
        "desenvolvedora" in objeto &&
        "plataformas" in objeto) {
        return true; // Retorna true;
    }
    else {
        return false; // Retorna false;
    }
}
// Criado uma função chamada handleData responsável por tratar os dados da api. O async está tornando a função assíncrona, ou seja, ela vai esperar os await serem resolvidos para depois retornar o valor.
async function handleData() {
    // O await está falando para esperar as respostas das requisições para depois armazenar o retorno na variável.
    const jogo = (await fetchData("jogo.json")); // Executa a função fetchData passando a url da api como parâmetro e definindo o tipo da variável T como a interface Jogo e armazena o retorno na variável jogo.
    // Se o objeto for do tipo Jogo executa o if.
    if (checkJogo(jogo)) {
        // Agora o type safe está funcionando, pois o TypeScript sabe qual é o tipo de dado que está sendo utilizado, pois ele passou pelo type guard.
        console.log(jogo.desenvolvedora.toLowerCase());
    }
    const livro = (await fetchData("livro.json")); // Executa a função fetchData passando a url da api como parâmetro e definindo o tipo da variável T como a interface Livro e armazena o retorno na variável livro.
    console.log(livro);
}
handleData(); // Chama a função handleData.
