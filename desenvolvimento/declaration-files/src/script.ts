//* > Chamando a interface global.

// Criado um objeto chamado livro que recebe o tipo Produto que é uma interface global do arquivo global.d.ts que possui nome e preço como atributos.
const livro: Produto = {
  nome: "Clean Code",
  preco: 120,
};

//* > Declaração Global
/*
  - Não é necessário criar um arquivo global ou `**.d.ts**` para ter um tipo global. É possível também declarar dentro de um arquivo do tipo module, usando o declare global {}.
*/

// Declarado uma interface global chamada Filme que possui nome e autor como atributos.
declare global {
  interface Filme {
    nome: string;
    autor: string;
  }
}

// Criado um objeto chamado locadora que recebe o tipo Filme que é uma interface global do arquivo script.ts que possui nome e autor como atributos.
// O export é para que o objeto locadora possa ser importado tornando o locadora um objeto do tipo Filme global.
export const locadora: Filme = {
  nome: "Interstellar",
  autor: "Christopher Nolan",
};
