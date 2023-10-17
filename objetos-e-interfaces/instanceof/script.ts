//* > Class.
/*
  Classes em TypeScript são semelhantes a classes em Java ou C#, são uma forma de definir uma estrutura para um objeto, com propriedades e métodos.
*/

// Cria uma classe chamada Produto.
class Produto {
  // Para funcionar no this do construtor, a propriedade precisa ser criada fora do construtor, com o exato nome que será passado no construtor e o seu tipo.
  nome: string;
  preco: number;

  // O construtor é responsável pela definição das propriedades/parâmetros da classe.
  // O construtor recebe um parâmetro obrigatório chamado nome do tipo string e preco do tipo number.
  constructor(nome: string, preco: number) {
    // O this está referenciando a propriedade nome da classe Produto com o parâmetro nome do construtor.
    // As propriedades recebem o valor que foi passado no parâmetro do construtor.
    this.nome = nome;
    this.preco = preco;
  }

  // Está criando um método/função chamado precoReal na classe Produto.
  precoReal() {
    return `R$ ${this.preco}`; // Retorna o valor da propriedade preco concatenado com a string "R$ ".
  }
}

const livro = new Produto("A Guerra dos Tronos", 200); // Está criando um objeto chamado livro que é uma instância da classe Produto, ou seja, livro é uma referência da classe Produto. Está passando dois parâmetros obrigatórios para o construtor da classe Produto.

console.log(livro); // Mostra a classe Produto com todas as propriedades criadas no construtor.
console.log(livro.nome); // Mostra o valor da propriedade nome dentro da classe Produto.
console.log(livro.precoReal()); // Mostra no console o retorno do método precoReal da classe Produto.

//* > Instanceof.
/*
  O instanceof é um operador que verifica se um objeto é uma instância/referência de uma classe, retornando true ou false.
*/

console.log(livro instanceof Produto); // Retorna true, pois o objeto livro é uma instância/referência da classe Produto.
console.log(livro instanceof Array); // Retorna false, pois o objeto livro não é uma instância/referência da classe Array.

// Cria uma classe chamada Produto.
class Livro {
  // Para funcionar no this do construtor, a propriedade precisa ser criada fora do construtor, com o exato nome que será passado no construtor e o seu tipo.
  autor: string;

  // O construtor é responsável pela definição das propriedades/parâmetros da classe.
  // O construtor recebe um parâmetro obrigatório chamado autor do tipo string.
  constructor(autor: string) {
    // As propriedades recebem o valor que foi passado no parâmetro do construtor.
    this.autor = autor; // O this está referenciando a propriedade autor da classe Jogo com o parâmetro autor do construtor.
  }
}

// Cria uma classe chamada Jogo.
class Jogo {
  // Para funcionar no this do construtor, a propriedade precisa ser criada fora do construtor, com o exato nome que será passado no construtor e o seu tipo.
  jogadores: number;

  // O construtor é responsável pela definição das propriedades/parâmetros da classe.
  // O construtor recebe um parâmetro obrigatório chamado jogadores do tipo number.
  constructor(jogadores: number) {
    // As propriedades recebem o valor que foi passado no parâmetro do construtor.
    this.jogadores = jogadores; // O this está referenciando a propriedade jogadores da classe Jogo com o parâmetro jogadores do construtor.
  }
}

// Criado uma função chamada buscarProduto que recebe um parâmetro obrigatório chamado busca do tipo string.
function buscarProduto(busca: string) {
  // Se a busca for igual a "O Hobbit" o if é executado.
  if (busca === "O Hobbit") {
    return new Livro("J. R. R. Tolkien"); // Retorna um novo objeto da classe Livro com o parâmetro obrigatório autor passado no construtor.
  }
  // Se a busca for igual a "Dark Souls" o if é executado.
  if (busca === "Dark Souls") {
    return new Jogo(1); // Retorna um novo objeto da classe Jogo com o parâmetro obrigatório jogadores passado no construtor.
  }

  // Caso nenhuma das condições acima seja verdadeira, retorna null.
  return null;
}

const produto1 = buscarProduto("O Hobbit"); // Está criando um objeto chamado produto1 que recebe o retorno da função buscarProduto com o parâmetro obrigatório busca passado.

const produto2 = buscarProduto("Dark Souls"); // Está criando um objeto chamado produto2 que recebe o retorno da função buscarProduto com o parâmetro obrigatório busca passado.

// produto1.autor; // Retorna um erro, pois o TypeScript não sabe se o produto é uma instância/referência da classe Livro ou Jogo, então ele não deixa acessar a propriedade autor por retornar null.

// Se o produto1 for uma instância/referência da classe Livro o if é executado.
if (produto1 instanceof Livro) {
  console.log(produto1.autor); // Retorna no console o valor da propriedade autor da classe Livro.
}

// Se o produto2 for uma instância/referência da classe Jogo o if é executado.
if (produto2 instanceof Jogo) {
  console.log(produto2.jogadores); // Retorna no console o valor da propriedade jogadores da classe Jogo.
}

//* > Extends.
/*
  O instanceof verifica se a função construtora herda de outra (extends).
*/

// Criado uma classe chamada Curso que herda as propriedades e métodos da classe Produto.
class Curso extends Produto {
  // Para funcionar no this do construtor, a propriedade precisa ser criada fora do construtor, com o exato nome que será passado no construtor e o seu tipo.
  nivel: string;

  // O construtor é responsável pela definição das propriedades/parâmetros da classe.
  // O construtor recebe um parâmetro obrigatório chamado nome do tipo string, preco do tipo number que são da classe Produto e nivel do tipo string.
  constructor(nome: string, preco: number, nivel: string) {
    super(nome, preco); // Chama o construtor da classe Produto e passa os parâmetros obrigatórios nome e preco.

    // As propriedades recebem o valor que foi passado no parâmetro do construtor.
    this.nivel = nivel; // O this está referenciando a propriedade nivel da classe Curso com o parâmetro nivel do construtor.
  }
}

const curso = new Curso("JavaScript", 100, "Básico"); // Está criando um objeto chamado curso que é uma instância da classe Curso, ou seja, curso é uma referência da classe Curso. Está passando três parâmetros obrigatórios para o construtor da classe Curso.

// Curso está herdando as propriedades e métodos da classe Produto, sendo assim curso é uma instância/referência da classe Produto e por isso executa o if.
if (curso instanceof Produto) {
  console.log(curso.preco); // Retorna no console o valor da propriedade autor da classe Livro.
}

//* Instanceof e Interface.
/*
  O instanceof é um operador que existe no JavaScript. Se você definir a interface de um objeto apenas com o interface e não possuir uma classe construtora do mesmo, não será possível utilizar o instanceof na interface.
*/

// Criado uma interface chamada Carro que possui uma propriedade obrigatória chamada nome do tipo string.
interface Carro {
  nome: string,
}

// Criado um objeto chamado honda que tem a interface Carro como tipo.
const honda: Carro = {
  nome: "Honda",
}

// console.log(honda instanceof Carro); // Retorna um erro, pois o TypeScript não sabe se o honda é uma instância/referência da interface Carro, pois não existe uma classe construtora do mesmo e nem uma classe que herda a interface Carro.