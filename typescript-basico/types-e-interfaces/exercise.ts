//* > Exercício 1.
/*
  - Defina a interface da API e mostre os dados na tela.
*/

// Criado uma função chamada fetchProduct que irá buscar os dados da API.
async function fetchProduct() {
  const response = await fetch("https://api.origamid.dev/json/notebook.json"); // Criado uma variável chamada response que armazena a promisse da API.
  const data = await response.json(); // Criado uma variável chamada data que armazena os dados da API em formato JSON.
  return showProduct(data); // Retorna a função showProduct com os dados da API.
}

// Criado uma interface chamada Empresa que define os tipos de dados da API de empresa. Os nome das propriedades devem ser iguais aos da API.
interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

// Criado uma interface chamada Product que define os tipos de dados da API. Os nome das propriedades devem ser iguais aos da API.
interface Product {
  nome: string;
  preco: number;
  descricao: string;
  garantia: string;
  seguroAcidentes: boolean;

  // Como os dados de empresa são iguais, foi criado uma interface própria para Empresa, contendo o nome, fundação e país.
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

// Criado uma função chamada showProduct que irá mostrar os dados da API na tela.
function showProduct(data: Product) {
  // Está criando um elemento HTML na página com os dados da API.
  document.body.innerHTML += `
    <div>
      <h2>${data.nome}</h2>
      <p>R$ ${data.preco}</p>
      <p>${data.descricao}</p>
      <p>Garatia: ${data.garantia}</p>
      <p>Tem seguro: ${data.seguroAcidentes ? "Sim" : "Não"}</p>

      <div>
        <h3>Fabricante: ${data.empresaFabricante.nome}</h3>
        <p>Ano: ${data.empresaFabricante.fundacao}</p>
        <p>País: ${data.empresaFabricante.pais}</p>
      </div>

      <div>
        <h3>Montadora: ${data.empresaMontadora.nome}</h3>
        <p>Ano: ${data.empresaMontadora.fundacao}</p>
        <p>País: ${data.empresaMontadora.pais}</p>
    </div>
  `;
}

fetchProduct(); // Está chamando a função fetchProduct.
