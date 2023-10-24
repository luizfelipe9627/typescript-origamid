//* > Guard, Safety e Narrowing.
/*
  O Type Guard (defesa) garante a Type Safety (segurança) do dado dentro do bloco condicional. Esse processo é chamado de Type Narrowing (estreitamento).
  O TypeScript faz Control Flow (controle de fluxo) para entender qual o dado dentro da condicional.
*/

function typeGuard(value: any) {
  // As verificações são o control flow, ou seja, ele verifica o tipo do dado e executa o bloco condicional já sabendo o tipo do dado.
  if (typeof value === "string") {
    return value.toLowerCase(); // O TypeScript entende que value é do tipo  string por causa do Type Guard.
  }
  if (typeof value === "number") {
    return value.toFixed(); // O TypeScript entende que value é do tipo  number por causa do Type Guard.
  }
  if (value instanceof HTMLElement) {
    return value.innerText; // O TypeScript entende que value é do tipo HTMLElement por causa do Type Guard.
  }
}

// Está chamando as funções e passando os parâmetros para elas, sendo que cada parâmetro é de um tipo de dado diferente.
typeGuard("Origamid");
typeGuard(200);
typeGuard(document.body);

//* > in.
/*
  O operador in verifica se o objeto possui uma propriedade com o mesmo nome da string comparada "propriedade" in obj.
*/

// Criado um objeto chamado obj.
const obj = {
  nome: "Origamid", // Propriedade nome.
};

// Verifica se o objeto obj possui a propriedade nome, se sim executa o if se não executa o else.
if ("nome" in obj) {
  console.log(obj.nome); // Retorna o valor da propriedade nome.
} else {
  console.log("Não possui a propriedade nome."); // Retorna a mensagem.
}

// Verifica se o objeto obj possui a propriedade idade, se sim executa o if se não executa o else.
if ("idade" in obj) {
  console.log(obj.idade); // Retorna o valor da propriedade idade.
} else {
  console.log("Não possui a propriedade idade."); // Retorna a mensagem.
}

// Função chamada fetchProduto responsável por fazer uma requisição para a API e retornar um objeto. O async está tornando a função assíncrona, ou seja, ela vai esperar os await serem resolvidos para depois retornar o valor.
async function fetchProduto() {
  // O await está falando para esperar as respostas das requisições para depois armazenar o retorno na variável.
  const response = await fetch("https://api.origamid.dev/json/notebook.json"); // Faz uma requisição para a url da api e armazena o retorno(a resposta) na variável response.
  const json = await response.json(); // Transforma a resposta em um objeto JSON e armazena o retorno na variável json.
  handleProduto(json); // Executa a função handleProduto passando o objeto json como parâmetro.
}

// Criado uma interface chamada Produto que armazena os tipos de dados das propriedades do objeto retornado pela função fetchProduto.
interface Produto {
  nome: string;
  total: number;
}

// Função chamada handleProduto responsável por receber o objeto retornado pela função fetchProduto.
function handleProduto(data: Produto) {
  // Verifica se o objeto data possui a propriedade nome, se sim executa o if. Assim aplicando o Type Guard e definindo o tipo do dado como string.
  if ("nome" in data) {
    document.body.innerHTML += `<p>Nome: ${data.nome}</p>`; // Adiciona um elemento p com o valor da propriedade nome do objeto data.
  }
  // Verifica se o objeto data possui a propriedade total, se sim executa o if. Assim aplicando o Type Guard e definindo o tipo do dado como number.
  if ("total" in data) {
    document.body.innerHTML += `<p>Preço: R$ ${data.total + 100}</p>`; // Adiciona um elemento p com o valor da propriedade preco do objeto data.
  }
}

fetchProduto(); // Chama a função fetchProduto.
