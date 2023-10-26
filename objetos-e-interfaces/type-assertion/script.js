"use strict";
//* > as.
/*
  - Com o Type Assertion é possível "indicar" ao TypeScript qual o tipo de dado esperado com a palavra-chave as. Só é possível indicar tipos que possuam relação com o tipo original.
  - Evitar ao máximo o uso de Type Assertion, pois a segurança (Type Safety) é perdida quando indicamos algo que nem sempre será verdade.
*/
const player = document.querySelector(".player"); // Cria uma constante chamada video que armazena o elemento HTML com a classe player e indica que é do tipo HTMLVideoElement.
// Consegue acessar as propriedades de um elemento de video mesmo não sendo, pois o "as" indicou que o elemento é do tipo HTMLVideoElement.
// player.volume; // Retorna um erro pois o elemento não existe no documento.
const video = document.querySelector("#video"); // Cria uma constante chamada video que armazena o elemento HTML com a classe video e indica que é do tipo HTMLVideoElement.
// Nesse caso, o elemento existe no documento e é do tipo HTMLVideoElement, então é possível acessar as propriedades do elemento sem dar erro.
console.log(video.volume); // Mostra o volume do video no console.
// Função chamada fetchProduto responsável por fazer uma requisição para a API e retornar um objeto. O async está tornando a função assíncrona, ou seja, ela vai esperar os await serem resolvidos para depois retornar o valor.
async function fetchProduto() {
    // O await está falando para esperar as respostas das requisições para depois armazenar o retorno na variável.
    const response = await fetch("https://api.origamid.dev/json/notebook.json"); // Faz uma requisição para a url da api e armazena o retorno(a resposta) na variável response.
    return response.json(); // Retorna o retorno da requisição convertido para json e o "as" indica que é uma Promise do tipo Produto.
    // return response.json(); // Retorna o retorno da requisição convertido para json.
}
// Função chamada handleProduto responsável por receber o objeto retornado pela função fetchProduto.
async function handleProduto() {
    //* > Sintaxe alternativa 1:
    // const produto = (await fetchProduto()) as Produto; // Armazena o retorno da função fetchProduto na variável produto e indica que é do tipo da interface Produto, assim podendo acessar as propriedades do objeto.
    // O await está falando para esperar as respostas das requisições para depois armazenar o retorno na variável.
    const produto = await fetchProduto(); // Armazena o retorno da função fetchProduto na variável produto.
    console.log(produto.nome);
    //* > Sintaxe alternativa 2:
    console.log(produto.preco); // Indica que a variável produto é do tipo da interface Produto, assim podendo acessar as propriedades do objeto.
}
handleProduto(); // Chama a função handleProduto.
//* > ! non-null operator.
/*
  - Indica que não existe a possibilidade do dado ser null. Cuidado com o uso, pois pode levar a erros no runtime. Use apenas se tiver certeza.
  - Esse é um operador de TS "!." e não de JS como o "?.". Durante a compilação ele será removido.
*/
//* > Outras sintaxes.
