//* > Exercício 1.
/*
  1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json.
  2 - Defina a interface da API.
  3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags.
  4 - Use Type Guards para garantir a Type Safety do código.
  5 - Preencha os dados da API na tela.
*/

// Função chamada fetchCursos responsável por fazer uma requisição para a API e retornar um objeto. O async está tornando a função assíncrona, ou seja, ela vai esperar os await serem resolvidos para depois retornar o valor.
async function fetchCursos() {
  // O await está falando para esperar as respostas das requisições para depois armazenar o retorno na variável.
  const response = await fetch("https://api.origamid.dev/json/cursos.json"); // Faz uma requisição para a url da api e armazena o retorno(a resposta) na variável response.
  const json = await response.json(); // Transforma a resposta em um objeto JSON e armazena o retorno na variável json.
  handleCursos(json); // Executa a função handleCurso passando o objeto json como parâmetro.
}

// Criado uma interface chamada Curso que armazena os tipos de dados das propriedades do objeto retornado pela função fetchCursos.
interface Curso {
  nome: string;
  horas: number;
  tags: string[];
}

// Criado uma função chamada handleCursos que recebe um parâmetro chamado data do tipo unknown, ou seja, não sabemos o tipo de dado que será passado e por isso ele só irá permitir o uso de métodos quando a Type Safety estiver garantida.
function handleCursos(data: unknown) {
  // Se o tipo de dado for um array executa o if, se não executa o else.
  if (data instanceof Array) {
    // O método filter está filtrando os dados(data) do array e retornando apenas os dados que são do tipo Curso e que passaram pela função isCurso.
    data
      .filter(isCurso)
      // O método forEach está percorrendo os dados(data) do array e executando uma função para cada item do array.
      .forEach((item) => {
        // Está inserindo as informações do item no body do html.
        document.body.innerHTML += `
          <div>
            <h2>${item.nome}</h2>
            <p>${item.horas}</p>
            <p>${item.tags}</p>
          </div>
        `;
      });
  }
}

fetchCursos(); // Chama a função fetchCursos.

// Criado uma função type guard chamada isCurso que recebe um parâmetro chamado value do tipo unknown que retorna um boolean, com o uso do is se for true ele está dizendo que o tipo de dado que será retornado é do tipo Curso que é uma interface.
function isCurso(value: unknown): value is Curso {
  // Verifica se o value existe e se o tipo de dado é um objeto e se o objeto possui as propriedades nome, horas e tags, se for true em todas executa o if, se não executa o else.
  if (
    value &&
    typeof value === "object" &&
    "nome" in value &&
    "horas" in value &&
    "tags" in value
  ) {
    return true; // Retorna true.
  } else {
    return false; // Retorna false.
  }
}
