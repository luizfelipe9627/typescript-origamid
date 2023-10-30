//* > Classes.
/*
  As classes/funções construtoras são responsáveis pela construção de objetos que já vimos, como MouseEvent, HTMLElement e os demais.
*/

// Criado uma classe chamada Produto.
class Produto {
  // Para funcionar no this do construtor, a propriedade precisa ser criada fora do construtor, com o exato nome que será passado no construtor e o seu preco.
  preco: number | undefined; // O preco da propriedade preco é number ou undefined. Quando utilizar o "?" tem que colocar o "ou(|) undefined".
  nome: string;

  // O construtor é responsável pela definição das propriedades/parâmetros da classe.
  // O construtor recebe dois parâmetros, sendo um obrigatório chamado nome do tipo string e outro opcional chamado preco do tipo number. O parâmetro opcional tem que ser o último parâmetro do construtor.
  constructor(nome: string, preco?: number) {
    this.nome = nome;
    this.preco = preco;
  }
}

const livro = new Produto("O Senhor dos Anéis", 14.99); // Está criando um objeto chamado livro que é uma instância/refêrencia da classe Produto. Está passando dois parâmetros obrigatórios para o construtor da classe Produto.

console.log(livro.preco); // Mostra o valor da propriedade preco dentro da classe Produto.
console.log(livro.nome); // Mostra o valor da propriedade nome dentro da classe Produto.

//* > Modificadores.
/*
  O TypeScript fornece diversas palavras-chave (Modifiers) que podem ser utilizadas em propriedades de classes modificar o comportamento/uso das mesmas.
*/



//* > Class e Interface.
/*
  Ao definirmos uma classe, a sua interface é gerada automaticamente pelo TypeScript. A definição da classe é o que utilizamos para verificar se um objeto é uma instância/refêrencia da mesma instanceof class.
*/
