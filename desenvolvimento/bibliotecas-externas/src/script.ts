//* > Biblioteca externa.
/*
  - Ao usarmos uma biblioteca externa criada em JavaScript, o TS não consegue automaticamente identificar a interface da mesma.
  - Para isso, milhares de projetos fornecem para instalação os seus arquivos .d.ts, com isso o TS passa a reconhecer a interface da mesma.
*/

//* > Biblioteca jQuery.
/*
  - Para o typescript reconhecer a interface do jQuery, basta instalar o @types/jquery.
  - npm install --save-dev @types/jquery
*/

const body = $("body"); // Seleciona o body e armazena na variável body.
console.log(body); // Imprime no console o body.

body.addClass("ativo"); // Adiciona a classe ativo ao body.

//* > Biblioteca Lodash.
/*
  - Para o typescript reconhecer a interface do Lodash, basta instalar o @types/lodash.
  - npm install --save-dev @types/lodash
*/

console.log(_.difference([1, 6, 3], [2, 3, 4])); // Imprime no console a diferença entre as duas arrays.
console.log(_.intersection([1, 6, 3], [2, 3, 4])); // Imprime no console a intersecção(igualdade) entre as duas arrays.

//* > Biblioteca Vimeo.
/*
  - Não baixamos o @types/vimeo, sendo assim ele não reconhece as interfaces e funções da biblioteca, fazendo o TS acusar erro.
*/
const iframe = document.querySelector("iframe"); // Seleciona o iframe e armazena na variável iframe.

declare const Vimeo: any; // Declara a variável Vimeo como any, para que o TS não acuse erro.

const player = new Vimeo.Player(iframe); // Cria um novo player do Vimeo.

console.log(player); // Imprime no console o player.
