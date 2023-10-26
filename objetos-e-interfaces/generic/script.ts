//* > Generics.
/*
  - Um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface. Esse tipo poderá ser indicado no momento do uso da função através de <Tipo>.
*/

// Criado uma função chamada retorno que armazena uma variável(<>) do tipo genérico chamada T, que recebe um parâmetro chamado a do tipo armazenado na variável T e retorna o valor de a seguindo o tipo armazenado na variável T.
function retorno<T>(a: T): T {
  return a;
}

// Utilizando a variável T o TypeScript vai saber que tipo de dado será retornado, assim podendo nos dar acesso aos métodos e propriedades do tipo de dado retornado.
console.log(retorno<number>(123)); // Executa a função retorno já passando o tipo de dado que será retornado, sendo assim o tipo da variável T será number e o retorno será 123 no console.
console.log(retorno("God of War")); // Executa a função retorno passando o valor "God of War" como parâmetro, sendo assim o tipo da variável T será string e o retorno será "God of War" no console.
console.log(retorno(true)); // Executa a função retorno passando o valor true como parâmetro, sendo assim o tipo da variável T será boolean e o retorno será true no console.

//* > Generics em Arrays.
/*
  - É possível indicar que o tipo genérico deve ser um array com [].
*/

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Cria uma variável chamada numeros que armazena um array de números.
const frutas = ["Maçã", "Banana", "Laranja", "Pêra", "Uva", "Limão"]; // Cria uma variável chamada frutas que armazena um array de strings.

// Criado uma função chamada firstFive que armazena uma variável(<>) do tipo genérico chamada T, que recebe um parâmetro chamado list do tipo armazenado na variável T em array e retorna uma array.
function firstFive<T>(list: T[]): T[] {
  return list.slice(0, 5); // Retorna os 5 primeiros valores do array.
}

// Utilizando a variável T o TypeScript vai saber que tipo de dado será retornado, assim podendo nos dar acesso aos métodos e propriedades do tipo de dado retornado.
console.log(firstFive(numeros)); // Executa a função firstFive passando o array numeros como parâmetro, sendo assim o tipo da variável T será number e o retorno será [1, 2, 3, 4, 5] no console.
console.log(firstFive(frutas)); // Executa a função firstFive passando o array frutas como parâmetro, sendo assim o tipo da variável T será string e o retorno será ["Maçã", "Banana", "Laranja", "Pêra", "Uva"] no console.

//* > Generics em Funções.
/*
  - É possível indicar que o tipo genérico deve ser uma função com Nome<Tipo>(art Tipo) => {}.
*/

// Criado uma função chamada notNull que armazena uma variável(<>) do tipo genérico chamada T, que recebe um parâmetro chamado arg do tipo armazenado na variável T.
function notNull<T>(arg: T) {
  // Se o parâmetro arg for diferente de null executa o if, caso contrário executa o else.
  if (arg !== null) {
    return arg;
  } else {
    return null;
  }
}

// O operador ? é chamado de optional chaining, ele verifica se o objeto existe antes de acessar a propriedade, se não existir ele não executa o código seguinte.
console.log(notNull("Luiz")?.toLowerCase()); // Executa a função notNull passando o valor "Luiz" como parâmetro, sendo assim o tipo da variável T será string, o toLowerCase() só será executado se o valor não for null, caso contrário será retornado null no console.
console.log(notNull(200)?.toFixed(2)); // Executa a função notNull passando o valor 200 como parâmetro, sendo assim o tipo da variável T será number, o toFixed(2) só será executado se o valor não for null, caso contrário será retornado null no console.

// Criado uma função chamada typeData que armazena uma variável(<>) do tipo genérico chamada T, que recebe um parâmetro chamado a do tipo armazenado na variável T.
function typeData<T>(a: T) {
  // Cria uma variável chamada result que armazena um objeto com duas propriedades.
  const result = {
    data: a, // Cria uma propriedade chamada data que armazena o valor do parâmetro a.
    type: typeof a, // Cria uma propriedade chamada type que armazena o tipo do parâmetro a.
  };

  return result; // Retorna o objeto result no console.
}

console.log(typeData(200)); // Executa a função typeData passando o valor "Luiz" como parâmetro, sendo assim o tipo da variável T será string e mostra o retorno no console.

//* > Extends.
/*
  - É possível indicar que o tipo genérico deve herdar de uma interface específica com o extends.
*/

// Criado uma função chamada extractText que armazena uma variável(<>) do tipo genérico chamada T essa variável T extende o tipo HTMLElement, ou seja, só pode receber um elemento HTML como parâmetro que irá herdar os métodos e propriedades do tipo HTMLElement, que recebe um parâmetro chamado el do tipo armazenado na variável T.
function extractText<T extends HTMLElement>(el: T) {
  return {
    text: el.innerHTML, // Armazena o texto do elemento HTML.
    el, // Armazena o elemento HTML.
  };
}

const linkTag = document.querySelector("a");

// Para o linkTag não ser null, é necessário fazer uma verificação. Se existir executa o if.
if (linkTag) {
  console.log(extractText(linkTag).el.href); // Executa a função extractText passando o elemento HTML como parâmetro e mostra no console o valor da propriedade href do elemento HTML presente no objeto retornado pela função.
}

// Criado uma função chamada $ que armazena uma variável(<>) do tipo genérico chamada Type essa variável Type extende o tipo Element, ou seja, só pode receber um elemento HTML como parâmetro que irá herdar os métodos e propriedades do tipo Element, que recebe um parâmetro chamado selector do tipo string e retorna um elemento HTML do tipo armazenado na variável Type ou null.
function $<Type extends Element>(selector: string): Type | null {
  return document.querySelector(selector); // Retorna um elemento HTML do tipo armazenado na variável Type ou null.
}

const h1 = $<HTMLElement>("h1"); // Executa a função $ passando o valor "h1" como parâmetro, e definindo o tipo da variável Type como HTMLElement e armazena o retorno na variável h1.

console.log(h1); // Mostra no console o elemento HTML armazenado na variável h1.

//* > Métodos.
/*
  - Métodos nativos são definidos utilizando generics, assim podemos indicar durante a execução qual será o tipo esperado.
*/

const linkClass = document.querySelector<HTMLAnchorElement>(".link"); // Puxa o elemento HTML com a classe .link e define o tipo do elemento como HTMLAnchorElement, depois armazena o elemento na variável linkClass.

// Verificar se o elemento linkClass é uma instância de HTMLAnchorElement, é o mais recomendado, pois dirá ao TypeScript que o elemento é do tipo de dado HTMLAnchorElement.
if (linkClass instanceof HTMLAnchorElement) {
  // O operador ? é chamado de optional chaining, ele verifica se o objeto existe antes de acessar a propriedade, se não existir ele não executa o código seguinte.
  linkClass?.href; // Acessa a propriedade href do elemento HTML.
}

// Criado uma função chamada getData que armazena uma variável(<>) do tipo genérico chamada T, que recebe um parâmetro chamado url do tipo string e retorna um objeto JSON do tipo armazenado na variável T.
async function getData<T>(url: string): Promise<T> {
  // O await está falando para esperar as respostas das requisições para depois armazenar o retorno na variável.
  const response = await fetch(url); // Faz uma requisição para a url passada como parâmetro e armazena o retorno(a resposta) na variável response.
  const json = await response.json(); // Transforma a resposta em um objeto JSON e armazena o retorno na variável json.

  return json; // Retorna o objeto JSON.
}

interface Notebook {
  nome: string;
  preco: number;
}

// Criado uma função chamada handleData responsável por tratar os dados da api. O async está tornando a função assíncrona, ou seja, ela vai esperar os await serem resolvidos para depois retornar o valor.
async function handleData() {
  // O await está falando para esperar as respostas das requisições para depois armazenar o retorno na variável.
  const notebook = await getData<Notebook>(
    "https://api.origamid.dev/json/notebook.json",
  ); // Executa a função getData passando a url da api como parâmetro e definindo o tipo da variável T como a interface Notebook e armazena o retorno na variável notebook.
  console.log(notebook.nome); // Mostra no console o valor da propriedade nome do objeto notebook.
}

handleData(); // Executa a função handleData.
