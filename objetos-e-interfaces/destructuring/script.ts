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

// Criado uma função chamada handleClick que recebe um objeto e desestrutura ele pegando apenas os atributos currentTarget e pageX, sendo do tipo MouseEvent.
function handleClick({
  currentTarget,
  pageX,
}: {
  currentTarget: EventTarget | null;
  pageX: number;
}) {
  console.log(currentTarget); // Imprime no console o currentTarget que é o elemento que ativou o evento.
  console.log(pageX); // Imprime no console a posição X(horizontal) do mouse no momento do click.
}

document.documentElement.addEventListener("click", handleClick); // Adiciona um evento de click no documento(html) e chama a função handleClick quando o evento for disparado.

//* > ...rest
/*
  - O operador `...rest` retorna uma Array.
*/
