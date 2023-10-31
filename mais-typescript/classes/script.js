"use strict";
//* > Classes.
/*
  As classes/funções construtoras são responsáveis pela construção de objetos que já vimos, como MouseEvent, HTMLElement e os demais.
*/
// Criado uma classe chamada Produto.
class Produto {
    // Para funcionar no this do construtor, a propriedade precisa ser criada fora do construtor, com o exato nome que será passado no construtor e o seu valor.
    preco; // O preco da propriedade preco é number ou undefined. Quando utilizar o "?" tem que colocar o "ou(|) undefined".
    nome;
    // O construtor é responsável pela definição das propriedades/parâmetros da classe.
    // O construtor recebe dois parâmetros, sendo um obrigatório chamado nome do tipo string e outro opcional chamado preco do tipo number. O parâmetro opcional tem que ser o último parâmetro do construtor.
    constructor(nome, preco) {
        // Está atribuindo os valores dos parâmetros para as propriedades da classe pai(Produto).
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
// Criado uma classe chamada Filme.
class Filme {
    // O readonly é um modificador que faz com que a propriedade só possa ser lida, ou seja, não pode ser alterada.
    genero = "Terror"; // Criado uma propriedade padrão chamada genero.
    // Para funcionar no this do construtor, a propriedade precisa ser criada fora do construtor, com o exato nome que será passado no construtor e o seu valor.
    // O public é o modificador padrão, ou seja, se não for definido nenhum modificador, o TypeScript entende que a propriedade é public, ou seja, pode ser acessada e alterada de qualquer lugar.
    preco;
    // O protected é um modificador que faz com que a propriedade só possa ser acessada dentro da classe ou nas classes que herdam da classe.
    nome;
    // O private é um modificador que faz com que a propriedade só possa ser acessada dentro da classe.
    ano; // A propriedade ano é number ou undefined. Quando utilizar o "?" tem que colocar o "ou(|) undefined".
    // O construtor é responsável pela definição das propriedades/parâmetros da classe.
    // O construtor recebe três parâmetros, sendo um obrigatório chamado nome do tipo string, outro obrigatório chamado preco do tipo number e outro opcional chamado ano do tipo number. O parâmetro opcional tem que ser o último parâmetro do construtor.
    constructor(nome, preco, ano) {
        // Está atribuindo os valores dos parâmetros para as propriedades da classe pai(Filme).
        this.nome = nome;
        this.ano = ano;
        this.preco = preco;
    }
    // Criado um método chamado getPreco que retorna o valor da propriedade preco.
    getPreco() {
        return Filme.transformaPreco(this.preco); // Está chamando o método transformaPreco passando o valor da propriedade preco.
    }
    // O static é um modificador que faz com que o método possa ser acessado somente pela classe e seu escopo, ou seja, não pode ser acessado pela instância/refêrencia da classe.
    static transformaPreco(preco) {
        return `R$ ${preco}`; // Retorna o valor da propriedade preco concatenado com o R$.
    }
}
const filme = new Filme("Interstellar", 39.99, 2021); // Está criando um objeto chamado filme que é uma instância/refêrencia da classe Produto. Está passando dois parâmetros obrigatórios para o construtor da classe Filme.
// console.log(filme.genero = "Comédia"); // Dá erro, pois a propriedade genero é readonly e não pode ser alterada.
// console.log(filme.preco); // Dá erro, pois a propriedade preco é private e só pode ser acessada ou alterada dentro da classe Filme.
console.log(filme.getPreco()); // Mostra o valor da propriedade preco dentro da classe Filme, pois o this.preco é acessado dentro da classe Filme e retorna o valor da propriedade preco.
//* > Class e Interface.
/*
  Ao definirmos uma classe, a sua interface é gerada automaticamente pelo TypeScript. A definição da classe é o que utilizamos para verificar se um objeto é uma instância/refêrencia da mesma instanceof class.
*/
// Criado uma classe chamada Quadrado.
class Quadrado {
    // Para funcionar no this do construtor, a propriedade precisa ser criada fora do construtor, com o exato nome que será passado no construtor e o seu valor.
    // O readonly é um modificador que faz com que a propriedade só possa ser lida, ou seja, não pode ser alterada.
    lados = 4; // Criado uma propriedade padrão chamada lados.
    medida;
    // O construtor é responsável pela definição das propriedades/parâmetros da classe.
    // O construtor recebe um parâmetro obrigatório chamado medida do tipo number.
    constructor(medida) {
        // Está atribuindo os valores dos parâmetros para as propriedades da classe pai(Quadrado).
        this.medida = medida;
    }
    // Criado um método chamado getPerimetro responsável por retornar o valor do perímetro do quadrado.
    getPerimetro() {
        return this.medida * this.lados; // Está retornando o valor da propriedade medida multiplicado pela propriedade lados.
    }
    // Criado um método chamado getArea responsável por retornar o valor da área do quadrado.
    getArea() {
        return this.medida * this.medida; // Está retornando o valor da propriedade medida multiplicado pela propriedade medida.
    }
}
const q1 = new Quadrado(10); // Está criando um objeto chamado q1 que é uma instância/refêrencia da classe Quadrado. Está passando um parâmetro obrigatório para o construtor da classe Quadrado.
console.log(q1.lados); // Mostra o valor da propriedade padrão lados dentro da classe quadrado.
// Se o q1 for uma instância/refêrencia da classe Quadrado, então executa o if.
if (q1 instanceof Quadrado) {
    console.log(q1.getPerimetro()); // Mostra o valor do perímetro do quadrado.
    console.log(q1.getArea()); // Mostra o valor da área do quadrado.
}
// Criado uma classe chamada Circulo.
class Circulo {
    // O readonly é um modificador que faz com que a propriedade só possa ser lida, ou seja, não pode ser alterada.
    PI = Math.PI; // Criado uma propriedade padrão chamada PI.
    raio;
    // O construtor é responsável pela definição das propriedades/parâmetros da classe.
    // O construtor recebe um parâmetro obrigatório chamado medida do tipo number.
    constructor(raio) {
        // Está atribuindo os valores dos parâmetros para as propriedades da classe pai(Quadrado).
        this.raio = raio;
    }
    // Criado um método chamado getPerimetro responsável por retornar o valor do perímetro do círculo.
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100; // Está retornando o valor da propriedade PI multiplicado pela propriedade raio.
    }
    // Criado um método chamado getArea responsável por retornar o valor da área do círculo.
    getArea() {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100; // Está retornando o valor da propriedade PI multiplicado pela propriedade raio ao quadrado.
    }
}
// Cria uma array chamada formas que recebe um array de números.
// O map está percorrendo cada número do array e a cada iteração armazena o número na variável n e executa o código dentro do map.
const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => {
    // Se o item do array for menor que 15, então executa o if.
    if (n < 15) {
        return new Quadrado(n); // Retorna um novo objeto Quadrado com o valor do item(número) do array.
    }
    else {
        return new Circulo(n); // Retorna um novo objeto Circulo com o valor do item(número) do array.
    }
});
console.log(formas); // Mostra o array contendo os objetos Quadrado e Circulo e seus valores.
// O forEach está percorrendo por cada objeto do array formas e a cada iteração armaena o objeto na variável forma e executa o código dentro do forEach.
formas.forEach((forma) => {
    // Se o forma for uma instância/refêrencia da classe Quadrado, então executa o if.
    if (forma instanceof Quadrado) {
        console.log(forma.getArea()); // Mostra no console o valor da área do quadrado.
    }
    // Se o forma for uma instância/refêrencia da classe Circulo, então executa o if.
    if (forma instanceof Circulo) {
        console.log(forma.getPerimetro()); // Mostra no console o valor do perímetro do círculo.
    }
});
