// Criado uma variável chamada produtos que receebe uma array de objetos.
const produtos = [
  {
    nome: "O Senhor dos Anéis",
    tipo: "livro",
  },
  {
    nome: "A Guerra dos Tronos",
    tipo: "livro",
  },
  {
    nome: "Dark Souls",
    tipo: "jogo",
  },
];

produtos.filter((produto) => produto.tipo === "livro"); // Produtos é uma array de objetos, sendo assim o JavaScript sabe que o tipo de dados que será passado é um objeto.

// Dados pode ser qualquer tipo de valor, pois o JavaScript não sabe o tipo de dados que será passado.
function filtrarLivros(dados) {
  return dados.filter((dado) => dado.tipo === "livro"); // Mesmo que o parâmetro dados não tenha o auto complete, o JavaScript sabe que o tipo de dados que será passado é um objeto.
  // return dados.filter(); // Não recebe o auto complete pois o dados não tem um tipo definido.
}

console.log(filtrarLivros(produtos)); // Produtos é uma array de objetos, sendo assim o JavaScript sabe que o tipo de dados que será passado é um objeto.