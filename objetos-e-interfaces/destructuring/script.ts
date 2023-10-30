//* > Destructuring.
/*
  - Durante a desestruturação de objetos, podemos indicar o tipo de dado com a sintaxe: { key1, key2 }: { key1: type1; key2: type2; } ou definindo uma interface.
*/

const { body }: { body: HTMLElement } = document; // Está desestruturando o objeto document e pegando apenas a propriedade body dele e atribuindo a uma variável chamada body do tipo HTMLElement

// Criado uma interface chamada Produto que possui dois atributos, nome e preco sendo que preco é opcional(?).
interface Produto {
  nome: string;
  preco?: number;
}

// Criado uma função chamada handleData que recebe um objeto e desestrutura ele pegando apenas os atributos nome e preco, sendo do tipo Produto.
function handleData({ nome, preco }: Produto) {
  console.log(nome.toLowerCase()); // Transforma o nome em letras minúsculas e imprime no console.
  console.log(preco?.toFixed(2)); // Transforma o preco em string e imprime no console com duas casas decimais.
}

// Chamando a função handleData passando um objeto que possui os atributos nome e preco.
handleData({
  nome: "Notebook",
  preco: 2000,
});

//* > Conhecer os dados.
/*
  - Durante a desestruturação é necessário indicar o tipo exato do dado esperado pelo TypeScript. Ex: um currentTarget pode ser EventTarget | null.
*/

// Criado uma função chamada handleClick que recebe um objeto e desestrutura ele pegando apenas os atributos currentTarget e pageX, definindo o tipo de cada atributo.
function handleClick({
  currentTarget,
  pageX,
}: {
  currentTarget: EventTarget | null;
  pageX: number;
}) {
  // Faz um type guard para verificar se o currentTarget é uma instância de HTMLElement, se for pode acessar a propriedade de um elemento HTML.
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`; // Adiciona um h1 no elemento HTML que foi clicado e imprime a posição X(horizontal) do mouse no momento do click.
  }

  console.log(pageX); // Imprime no console a posição X(horizontal) do mouse no momento do click.
}

document.documentElement.addEventListener("click", handleClick); // Adiciona um evento de click no documento(html) e chama a função handleClick quando o evento for disparado.

//* > ...rest
/*
  - O operador "...rest" passa por todos os argumentos restantes e os transforma em um array.
*/

// Criado uma função chamada comparaDados que recebe dois parâmetros, o primeiro é uma string que pode ser "number", "string" ou maior é um rest operator que pode receber vários valores(em array) do tipo number, string ou boolean.
function comparaDados(
  tipo: "number" | "string" | "boolean",
  ...valores: (number | string | boolean)[]
) {
  return valores.filter((valor) => typeof valor === tipo); // Retorna os valores que são do tipo passado como parâmetro para a função.
}

// Chama a função comparar passando o tipo de dado e os valores como parâmetro e imprime no console.
console.log(comparaDados("string", 2, 6, false, "Abacate", 8, "Morango", true));

// Criado uma função chamada comparaNumeros que recebe dois parâmetros, o primeiro é uma string que pode ser "menor" ou "maior" e o segundo é um rest operator que pode receber vários valores(em array) do tipo number.
function comparaNumeros(tipo: "menor" | "maior", ...numeros: number[]) {
  if (tipo === "menor") {
    // O operador spread(...) passa por todos os valores do array e os transforma em argumentos, como por exemplo: Math.min(2, 4, 6, 8, 10, 12).
    return Math.min(...numeros); // Retorna o menor valor do array numeros.
  }
  if (tipo === "maior") {
    // O operador spread(...) passa por todos os valores do array e os transforma em argumentos, como por exemplo: Math.max(2, 4, 6, 8, 10, 12).
    return Math.max(...numeros); // Retorna o maior valor do array numeros.
  }
}

console.log(comparaNumeros("menor", 2, 4, 6, 8, 10, 12)); // Chama a função comparaNumeros passando o tipo de dado e os valores como parâmetro e imprime no console.
