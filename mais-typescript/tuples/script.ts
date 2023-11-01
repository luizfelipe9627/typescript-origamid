//* > Tuples.
/*
  - Tuples são arrays que possuem dados em posições fixas.
*/

// Sem utilizar o tuples:
const produto1 = ["Notebook", 2000]; // Criado uma array chama produto1 que possui duas propriedades, sem definir o tipo de cada propriedade.

// Faz uma type guard para verificar se o primeiro elemento do array é uma string, se for executa o if.
if (typeof produto1[0] === "string") {
  console.log(produto1[0].toLowerCase()); // Converte a string para lowercase e exibe no console.
}

// Utilizando o tuples:
const produto2: [string, number] = ["Notebook", 2000]; // Criado uma array chama produto2 que possui duas propriedades, já definindo o tipo de cada propriedade.

console.log(produto2[0].toLowerCase()); // Acessa o primeiro elemento do array e converte a string para lowercase e exibe no console.
console.log(produto2[1].toFixed()); // Acessa o segundo elemento do array e converte o number para string e exibe no console.

const [nome, preco] = produto2; // Desestrutura o array produto2 e atribui os valores para as variáveis nome e preco. Sendo que ele armazena seguindo a ordem do array.
console.log(nome, preco); // Exibe no console o valor da variável nome e preco.

//* > as const.
/*
  - Torna um dado readonly e infere o tipo de dado mais específico possível. Em métodos que retornam Array's, as mesmas são transformadas em Tuples.
*/

// Criado uma função chamada getText que recebe um parâmetro do tipo string e retorna um array com um elemento do tipo HTMLElement e outro do tipo string, ou null se o elemento não existir.
function getText(selector: string) {
  const element = document.querySelector(selector) as HTMLElement; // Seleciona o elemento do DOM passado como parâmetro e armazena na variável element como HTMLElement.

  // Se o elemento existir executa o if.
  if (element) {
    // O as const torna o retorno da função mais específico, ou seja, ele retorna um array com dois elementos, sendo o primeiro do tipo HTMLElement e o segundo do tipo string. O elemento não pode ser alterado, pois ele é readonly.
    return [element, element.innerText] as const; // Retorna um array com o elemento e o texto dentro do elemento.
  } else {
    return null; // Retorna null ou seja, não existe o elemento.
  }
}

const button = getText("button"); // Armazena o retorno da função getText na variável button.

console.log(button); // Exibe no console o valor da variável button.

if (button) {
  // O TypeScript sabe que o primeiro elemento do array é um HTMLElement, pois foi definido na função getText, então ele consegue acessar as propriedades do HTMLElement.
  button[0].classList.add("new-class"); // Adiciona uma nova classe no elemento.
}
