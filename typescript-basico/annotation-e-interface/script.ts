//* > Annotation.
/* 
  Annotation é a definição do tipo de uma variável, parâmetro ou retorno de uma função ou método, o TypeScript obriga a definição do tipo, pois o JavaScript não faz isso automaticamente.
*/

let produto: string = "Livro"; // Cria uma variável chamada produto do tipo string, sendo assim, a variável só vai aceitar valores do tipo number.
// produto = 2; // Vai da erro, a variável produto só aceita valores do tipo string.

let preco: number = 29.99; // Cria uma variável chamada preco do tipo number, sendo assim, a variável só vai aceitar valores do tipo number.
// preco = "Livro"; // Vai da erro, a variável preco só aceita valores do tipo number.

// Para criar um objeto com tipos específicos, é necessário cria uma interface, no caso abrir e fechar chaves e colocar os tipos de cada propriedade.
const carro: {
  nome: string; // Propriedade nome está sendo definida como string.
  ano: number; // Propriedade ano está sendo definida como number.
} = {
  nome: "Fiat",
  ano: 2020,
};
// carro.nome = 3; // Vai da erro, a propriedade nome só aceita valores do tipo string.

//* > Interference.
/* 
  Interference é a definição do tipo de uma variável, parâmetro ou retorno de uma função pelo valor atribuído, o JavaScript faz isso automaticamente, mas o TypeScript também faz.
*/

const nome = "João"; // Cria uma variável chamada nome e atribui o valor João, o tipo da variável é inferido pelo valor atribuído, sendo assim, a variável só vai aceitar valores do tipo string.

// nome = 28; // Vai da erro, a variável nome só aceita valores do tipo string.

const barato = 200 < 400 ? true : "produto caro"; // Cria uma variável chamada barato e atribui o valor true, o tipo da variável é inferido por uma expressão ternária, sendo assim, a variável só vai aceitar valores do tipo boolean ou string.

//* > Funções.
/* 
  As annotations serão necessárias quando for definir o tipo dos parâmetros e o tipo do retorno de uma função.
*/

// Quando é função o TypeScript obriga a definir o tipo dos parâmetros e o tipo do retorno da função. Nesse caso, a função só vai aceitar parâmetros do tipo number e vai retornar um valor do tipo number.
function somar(a: number, b: number) {
  return a + b;
}
somar(1, 2); // Chama a função somar e passa dois parâmetros do tipo number.
// somar(1, "2"); // Vai da erro, pois o segundo parâmetro é do tipo string.

// Criado um objeto chamado nintendo, o tipo do objeto é inferido pelo valor atribuído, sendo assim, a variável só vai aceitar valores do tipo string.
const nintendo = {
  nome: "Nintendo",
  preco: "2000",
};

// Cria uma função chamada transformarPreco que recebe um parâmetro do tipo objeto, o objeto tem duas propriedades, nome e preco, ambas do tipo string.
function transformarPreco(produto: { nome: string; preco: string }) {
  produto.preco = `R$ ${produto.preco}`; // Concatena o valor da propriedade preco com a string reais.
  return produto; // Retorna o objeto produto.
}

// Chama a função transformarPreco e passa como parâmetro o objeto nintendo.
const produtoNovo = transformarPreco(nintendo);
console.log(produtoNovo); // Imprime no console o objeto produtoNovo.
