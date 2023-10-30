//* > Intersection.
/*
  - Funciona em parte como o extends para Interfaces, mas pode ser utilizado em Types.
*/

// Cria um type chamado Produto que possui um atributo chamado preco do tipo number.
type Produto = {
  preco: number;
};

// Cria um type chamado Carro que possui dois atributos, rodas e portas sendo ambos do tipo number.
type Carro = {
  rodas: number;
  portas: number;
};

// Criado uma função chamada handleProduto que recebe um parâmetro chamado dados que é do tipo Produto & Carro, ou seja, é uma interseção entre os dois types.
function handleProdutoCarro(dados: Carro & Produto) {
  // Está acessando os atributos do objeto dados que é do tipo Produto & Carro.
  dados.preco;
  dados.rodas;
  dados.portas;
}

// Chama a função handleProduto passando um objeto que possui os atributos preco, rodas e portas.n
handleProdutoCarro({
  preco: 20000,
  rodas: 4,
  portas: 5,
});

//* > Adicionar propriedades.
/*
  - É possível adicionar uma propriedade a uma interface/tipo que já definido.
*/

// Com type:
// Cria um type chamado TipoProduto que possui um atributo chamado number e portas do tipo number.
type TipoCarro = {
  number: number;
  portas: number;
};

type TipoCarroComPreco = TipoCarro & { preco: number }; // Cria um type chamado TipoCarroComPreco que recebe o type TipoCarro e adiciona um atributo chamado preco do tipo number.

// Com interface:
// Criado uma interface chamada InterfaceCarro que possui dois atributos, rodas e portas sendo ambos do tipo number.
interface InterfaceCarro {
  rodas: number;
  portas: number;
}

// Diferente do type o interface permite que você adicione novas propriedades a ela.
interface InterfaceCarro {
  preco: number;
}

function handleInterfaceCarro(carro: InterfaceCarro) {
  // Está acessando os atributos do parâmetro carro que é do tipo InterfaceCarro.
  carro.portas;
  carro.preco;
  carro.portas;
}

//* > Window.
/*
  - Se definimos uma propriedade global, podemos "extender" a interface de `**window**`, apenas redeclarando a interface.
*/

// Está adicionando uma propriedade userId do tipo number ao objeto window que é uma interface global.
interface Window {
  userId: number;
}

window.userId = 200; // Adiciona uma propriedade userId ao objeto window.

console.log(window.userId); // Imprime no console o valor da propriedade userId do objeto window.