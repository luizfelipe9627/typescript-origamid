//* Types primitivos.
/* 
  Types primitivos são os tipos de dados que não são objetos, ou seja, não possuem métodos e propriedades, como string, number, boolean, null, undefined, symbol e bigint.
*/

const frase: string = "Front End"; // Cria uma variável chamada frase que só aceita/recbe string.
const preco: number = 500; // Cria uma variável chamada preco que só aceita/recbe number.
const condi: boolean = preco > 100; // Cria uma variável chamada condi que só aceita/recbe boolean.

//* > Typeof.
/* 
  O typeof é um operador que retorna o tipo de uma variável, parâmetro ou retorno de uma função ou método.
*/

console.log(typeof frase); // Retorna string no console.
console.log(typeof preco); // Retorna number no console.
console.log(typeof condi); // Retorna boolean no console.

console.log(typeof {}); // Retorna object no console.
console.log(typeof document); // Retorna object no console.
console.log(typeof []); // Retorna object no console, pois array é um objeto.
console.log(typeof null); // Retorna object no console, porém é um bug do JS.

// Verifica se o tipo da variável preço é number, se for executa o if, se não executa o else.
if (typeof preco === "number") {
  console.log("É um number");
} else {
  console.log("Não é um number");
}

//* > Função construtura.
/*
  Uma função construtura é uma função que cria um objeto a partir de uma classe, como por exemplo, a classe String que cria um objeto do tipo string.
*/

const city1 = new String("Rio de Janeiro"); // Cria uma variável chamada city1 que atráves de uma função construtura recebe um objeto do tipo string.
const city2 = "São Paulo"; // Cria uma variável chamada city2 que recebe uma string.
const city3 = String("Curitiba"); // Cria uma variável chamada city1 que recebe atráves de uma função construtura cria uma string.

console.log(new String()); // Retorna um objeto do tipo string no console contendo uma string vazia.
console.log(String); // Retorna uma função no console.

console.log(typeof city1); // Retorna object no console.
console.log(typeof city2); // Retorna string no console.
console.log(typeof city3.toLowerCase); // Retorna string no console.
