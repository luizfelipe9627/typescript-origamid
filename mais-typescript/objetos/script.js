"use strict";
//* > Duck typing.
/*
  - Um objeto quando passado em uma função, pode conter propriedades e métodos além dos declarados na interface.
*/
// Criado um objeto chamado produto1 que possui duas propriedades: nome que é uma string e quantidade que é um number.
const produto1 = {
    nome: "Notebook",
    quantidade: 10,
    cor: "Azul",
};
const produto2 = {
    nome: "Geladeira",
    quantidade: 20,
    freezer: true,
};
const servico = {
    nome: "Instalação",
};
// Criado uma função chamada mostrarQuantidade que recebe um parâmetro chamado produto do tipo da interface Produto.
function mostrarQuantidade(produto) {
    console.log(produto.quantidade); // Imprime no console a quantidade do produto.
}
mostrarQuantidade(produto1); // Chama a função mostrarQuantidade e passa o objeto produto1 como argumento mesmo ele possuindo uma propriedade a mais.
mostrarQuantidade(produto2); // Chama a função mostrarQuantidade e passa o objeto produto2 como argumento mesmo ele possuindo uma propriedade a mais.
// mostrarQuantidade(servico); // Dá erro, pois o objeto servico não possui a propriedade quantidade definida na interface Produto.
//* > Partial.
/*
  - O TypeScript conta com utility types tipos que podem ser utilizados como funções para a definição de novos tipos.
  - Com o Partial<Tipo> podemos indicar que todas as propriedades da interface passada em Tipo, são opcionais.
*/
// Criado uma interface chamada mostrarQuantidadePartial que possui duas propriedades: nome do tipo string e quantidade do tipo number, o Partial indica que as propriedades do tipo Produto são opcionais.
function mostrarQuantidadePartial(produto) {
    // Para não ser undefined fazemos uma verificação se a propriedade existe, se existir executa o if.
    if (produto.quantidade) {
        console.log(produto.quantidade + 20); // Imprime no console a quantidade do produto.
    }
}
mostrarQuantidadePartial(produto1); // Chama a função mostrarQuantidade e passa o objeto produto1 como argumento mesmo ele possuindo uma propriedade a mais.
mostrarQuantidadePartial(produto2); // Chama a função mostrarQuantidade e passa o objeto produto2 como argumento mesmo ele possuindo uma propriedade a mais.
mostrarQuantidadePartial(servico); // Não dá erro, pois o objeto servico não possui a propriedade quantidade definida na interface Produto, mas como a propriedade quantidade é opcional, não dá erro.
// Criado um objeto chamado artigo que é do tipo Post e possui três propriedades: titulo que é uma string, visualizacoes que é um number e tags que é um array de string.
const artigo = {
    titulo: "Aprendendo TypeScript",
    visualizacoes: 3000,
    tags: ["typescript", "front-end"],
    // Podemos definir propriedades que não foram definidas na interface Post, pois a interface Post possui a propriedade [key: string]: unknown que permite que o objeto tenha qualquer propriedade a mais.
    autor: "André",
};
// Como a propriedade autor não foi definida na interface Post, o TypeScript não sabe qual o tipo dela, então é necessário fazer uma verificação para saber se ela é do tipo string.
if (typeof artigo.autor === "string") {
    console.log(artigo.autor.toLowerCase()); // Mostra no console o autor todo em letra minúscula.
}
// Criado uma função chamada mostratTitulo que recebe um parâmetro chamado objeto do tipo da interface ObjetoLiteral.
function mostratTitulo(objeto) {
    // Se o objeto existir e for do tipo objeto e se o objeto possuir a propriedade titulo, executa o if.
    if ("titulo" in objeto) {
        console.log(objeto.titulo); // Imprime no console o titulo do objeto.
        console.log(objeto.autor); // Imprime no console o objeto.
    }
}
// mostratTitulo("TypeScript"); // Irá dar erro, pois não é um objeto e nem contém a propriedade titulo.
mostratTitulo({ titulo: "TypeScript", autor: "Desconhecido" }); // Chama a função mostratTitulo e passa um objeto com a propriedade titulo como argumento.
