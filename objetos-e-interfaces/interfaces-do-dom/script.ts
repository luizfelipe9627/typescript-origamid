//* > querySelector.
/*
  Quando selecionamos um elemento do DOM com o querySelector, o objeto retornado dependerá da string que passarmos no método.
*/

const typeVideo = document.querySelector("video"); // Ao passar o mouse sobre a variável, o TS mostra que o tipo é HTMLVideoElement. Então é so colocar "as" e o tipo que queremos, no caso, "HTMLVideoElement".

typeVideo?.src; // Se o typeVideo for do tipo HTMLVideoElement, então ele terá a propriedade src. Caso seja null ou undefined, não terá a propriedade src pois o elemento não existe.

const video = document.querySelector("#videoPrincipal"); // O TS não sabe que o elemento é do tipo HTMLVideoElement, então é necessário fazer uma verificação.

// Verifica se o elemento é do tipo HTMLVideoElement, se for executa o if.
if (video instanceof HTMLVideoElement) {
  // Agora o TS sabe que existe a propriedade src pois o elemento é do tipo HTMLVideoElement.
  console.log(video.volume); // Mostra o volume no console, por padrão é 1.
}

//* > querySelectorAll.
/*
  O querySelectorAll retorna uma NodeList de elementos. Não confundir o nome da interface NodeListOf com o nome da classe NodeList.
*/

const links = document.querySelectorAll(".link"); // Está pegando todos os elementos que possuem a classe link e armazenando em uma NodeList na variável links. A NodeList é totalmente diferente de um array.
console.log(links instanceof NodeList); // Retorna true pois links está referenciando/instanciando uma NodeList.

// Percorre todos os elementos que tiverem a classe link na NodeList.
links.forEach((link) => {
  // Verifica se o elemento link é do tipo HTMLAnchorElement ou seja um elemento A, se for executa o if.
  if (link instanceof HTMLAnchorElement) {
    console.log(link.href); // Mostra o href do link no console.
  }
});

const arrayLinks = Array.from(links); // Transforma a NodeList em um Array.

// O filter retorna um novo array com os elementos que passarem no teste da função e armazena em achorLinks.
const achorLinks = arrayLinks.filter(
  (link) => link instanceof HTMLAnchorElement, // Filtra os elementos que são do tipo HTMLAnchorElement.
);

console.log(achorLinks); // Mostra no console os elementos que passaram no teste do filter.
