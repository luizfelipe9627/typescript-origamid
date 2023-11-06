//* > Module.

// Quando usamos o import também estamos tornando o arquivo em type module.
import pluginSlide from "./pluginSlide.js"; // Importando a função pluginSlide do arquivo pluginSlide.ts

pluginSlide("div"); // Chamando a função pluginSlide e passando um seletor do tipo string.

//* > Global.

// Como usamos o export no arquivo global.ts, o arquivo se torna type module e não mais global, sendo assim sendo necessário usar o import para chamar a constante URL_Base e a interface Produto.
import { URL_Base, Produto } from "./global.js"; // Importando a constante URL_Base e a interface Produto do arquivo global.ts

console.log(URL_Base); // Chama a constante URL_Base que está no arquivo global.ts e mostra no console.

// Criado um objeto chamado livro do tipo Produto(interface global do global.ts) que recebe um nome do tipo string e um preço do tipo number.
const livro: Produto = {
  nome: "O Hobbit",
  preco: 50,
};

console.log(livro); // Mostra no console o objeto livro.
