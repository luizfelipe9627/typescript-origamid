// Importado as funções normalizeTransaction e preencherTabela.
import fetchData from "./modules/fetchData.js";
import normalizeTransaction from "./modules/normalizeTransaction.js";

async function handleData() {
  // Criado uma constante chamada data que espera o retorno da função fetchData, passando como valor do tipo genérico T o tipo TransacaoAPI[], sendo assim retorna uma Promise do tipo TransacaoAPI[](array por conta da API ser uma array) ou null e passando como parâmetro a url da api.
  const data = await fetchData<TransacaoAPI[]>(
    "https://api.origamid.dev/json/transacoes.json",
  );

  if (!data) return; // Se data for falso, não executa o código abaixo.

  const transacoes = data.map(normalizeTransaction); // Criado uma constante chamada transacoes que passa por cada item do array data e retorna um novo array com os dados normalizados.

  preencherTabela(transacoes); // Executa a função preencherTabela passando como parâmetro a constante transacoes.
}

function preencherTabela(transacoes: Transacao[]): void {
  const tabela = document.querySelector("#transacoes tbody"); // Criado uma constante chamada tabela que recebe o elemento tbody da tabela.

  if(!tabela) return; // Se tabela for falso, não executa o código abaixo.

  // O forEach passa por cada item do array transacoes e armazena o valor no parâmetro transacao e depois executa o código abaixo.
  transacoes.forEach((transacao) => {
    // Adiciona uma nova linha na tabela com os dados da transação.
    tabela.innerHTML += `
      <tr>
        <td>${transacao.nome}</td>
        <td>${transacao.email}</td>
        <td>R$ ${transacao.moeda}</td>
        <td>${transacao.pagamento}</td>
        <td>${transacao.status}</td>
      </tr>
    `;
  });
}

handleData(); // Executa a função handleData.
