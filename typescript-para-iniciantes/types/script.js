//* > @ts-check.
/* 
  O @ts-check é uma diretiva do TypeScript que faz o VSCode verificar o código e mostrar erros.
*/

/* @ts-check */ 

//* > Types.
/* 
  O types é uma forma de definir o tipo de uma variável, função, etc.
*/

const frase = "Front end"; // Criado uma variável do tipo string.
const total = 100.05; // Criado uma variável do tipo number.
const empresas = ["Microsoft", "Apple", "IBM"]; // Criado uma variável do tipo array.

frase.toLowerCase(); // Está certo pois a função existe para string.

total.toLowerCase(); // Está errado pois a função não existe para number. O JavaScript só mostra o erro no runtime(quando roda).

const t = total.toFixed(); // Está certo pois a função existe para number.
console.log(t + 10); // Mostra 10010 pois o toFixed retorna uma string, sendo que deveria retornar um number.

empresas.map((empresa) => console.log(empresa.toLowerCase())); // O toLowerCase existe para string, então está certo.

const body = document.querySelector("body"); // O body é definido como HTMLBodyElement pelo TypeScript.

const button = document.querySelector("button"); // O button é definido como HTMLButtonElement ou null pelo TypeScript.

button.click(); // Dá erro pois o button está definido como null, o querySelector não encontrou o button.

const operacao = 100 + true; // O JavaScript mistura tipos de dados o que não acontece no TypeScript.
console.log(operacao); // Mostra 101 pois o true é convertido para 1.
