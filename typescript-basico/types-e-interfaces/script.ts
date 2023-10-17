//* > Object.
/*
  O object em TypeScript tem que ter suas propriedades tipadas, ou seja, definir o tipo de dado que cada propriedade do objeto vai receber.
*/

// Está criando um type chamado Produto que recebe um objeto com a propriedade nome do tipo string, preco do tipo number e teclado do tipo boolean. Essas propriedades são obrigatórias.
type Produto = {
  nome: string;
  preco: number;
  teclado: boolean;
};

// Criado uma função chamada preencherDados que recebe um objeto do tipo Produto.
function preencherDados(dados: Produto) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui teclado: ${dados.teclado ? "Sim" : "Não"}</p>
  </div>
  `;
}

// Está criado duas constantes chamada computador e notebook que recebe um objeto com os tipos de dados definidos no type Produto.
const computador: Produto = {
  nome: "Computador",
  preco: 2000,
  teclado: true,
};
const notebook: Produto = {
  nome: "Notebook",
  preco: 4000,
  teclado: false,
};

// Chama a função preencherDados passando o objeto computador e notebook como parâmetro.
preencherDados(computador);
preencherDados(notebook);

//* > Type Alias.
/*
  O type alias é um tipo que pode ser criado para facilitar a criação de outros tipos, como por exemplo, criar um type chamado NumberOrString que pode receber o tipo number ou string. Different from interface, type alias é usado para definir tipos de dados mais simples, como number, string, boolean, etc.
*/

type NumberOrString = number | string; // O type NumberOrString está falando que o valor pode ser do tipo number ou string.

let total: NumberOrString = 10; // Criado uma variável chamada total que recebe o valor 10. O type NumberOrString está falando que o valor pode ser do tipo number ou string.
total = "50"; // A variável total recebe o valor 50.

type Categorias = "design" | "codigo" | "descod"; // Criado um type chamado Categorias que recebe uma string com os valores e opções de design, codigo e descod.

// Criado uma função chamada pintarCategoria que recebe um parâmetro do tipo Categorias.
function pintarCategoria(categoria: Categorias) {
  // Se o valor da variável categoria for igual a design, irá imprimir no console a mensagem "Pintar de vermelho".
  if (categoria === "design") {
    console.log("Pintar de vermelho");
  } // Se não, se o valor da variável categoria for igual a codigo, irá imprimir no console a mensagem "Pintar de azul".
  else if (categoria === "codigo") {
    console.log("Pintar de azul");
  } // Se não, se o valor da variável categoria for igual a descod, irá imprimir no console a mensagem "Pintar de roxo".
  else if (categoria === "descod") {
    console.log("Pintar de roxo");
  }
}

pintarCategoria("design"); // Passando o valor design para a função pintarCategoria.
// pintarCategoria("programacao"); // Irá dar erro, pois o valor programacao não existe no type Categorias.

//* > Interface.
/*
  A interface é um tipo que pode ser criado para facilitar a criação de outros tipos, como por exemplo, criar uma interface chamada Pessoa que pode receber o tipo string ou number. Diferente do type, a interface pode ser usada para definir tipos de dados mais complexos, como objetos, arrays, classes, etc.
*/

// Geralmente usamos o type para definir tipos de dados primitivos, como number, string, boolean, etc.
type Pessoa = {
  nome: string;
  idade: number;
  nacionalidade: string;
};

// Já a interface é usada para definir tipos de dados mais complexos, como objetos, arrays, classes, etc.
interface Aula {
  nome: string;
  preco: number;
  horas: number;
}
