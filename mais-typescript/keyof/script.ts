//* > keyof.
/*
  - Indica que o dado é uma chave de uma Interface/Tipo.
*/

// Criado uma interface Produto que possui três propriedades: nome, preco e novo.
interface Produto {
  nome: string;
  preco: number;
  novo: boolean;
}

let chave: keyof Produto; // Cria uma variável que recebe as chaves da interface Produto, ou seja, nome, preco e novo.

chave = "nome"; // Chama a variável e seleciona a chave nome.

//* > typeof.
/*
  - Já vimos o typeof do JavaScript, responsável por retornar o tipo do dado. No TypeScript podemos utilizar ele para indicar que um dado possui o mesmo tipo que outro.
*/

// Criado uma função que recebe dois parâmetros do tipo number.
function coordenadas(x: number, y: number) {
  return { x, y }; // Retorna um objeto com as propriedades x e y.
}

let coord: typeof coordenadas; // Cria uma variável chamada coord que recebe o tipo da função coordenadas, sendo assim, coord também é uma função que recebe dois parâmetros do tipo number.

// coord = "teste"; // Dá erro, pois coord é uma função que recebe dois parâmetros do tipo number.

// Agora dá certo, pois coord é uma função que recebe dois parâmetros do tipo number.
coord = (x: number, y: number) => {
  return { x, y };
};

//* > querySelector.
/*
  - É com o keyof que o querySelector consegue associar uma string com a Interface que ela retorna.
*/

// Criado uma interface Elementos que possui cinco propriedades: a, video, div, body e audio.
interface Elementos {
  a: HTMLAnchorElement;
  video: HTMLVideoElement;
  div: HTMLDivElement;
  body: HTMLBodyElement;
  audio: HTMLAudioElement;
}

// Criado uma função chamada selecionar que é do tipo genérico, criando uma variável chamada Chave que extende o tipo Elementos, ou seja, Chave só pode receber uma das chaves da interface Elementos, que recebe um parâmetro chamado seletor do tipo armazenado na variável Chave e retorna um elemento HTML do tipo armazenado na variável Elementos ou null.
function selecionar<Chave extends keyof Elementos>(
  seletor: Chave,
): Elementos[Chave] | null {
  return document.querySelector(seletor); // Retorna o elemento HTML que corresponde ao elemento passado como parâmetro.
}

selecionar("a")?.href; // Chama a função selecionar passando o valor "a" como parâmetro e dando acesso as propriedades do tipo HTMLAnchorElement.
selecionar("video")?.volume; // Chama a função selecionar passando o valor "video" como parâmetro e dando acesso as propriedades do tipo HTMLVideoElement.

//* > checkInterface
/*
  - O keyof pode ser utilizado para criarmos funções genéricas utilitárias.
*/

// Criado uma função chamada fetchData que armazena uma variável(<>) do tipo genérico chamada T, que recebe um parâmetro chamado url do tipo string que retorna uma Promise do tipo armazenado na variável T. O async está tornando a função assíncrona, ou seja, ela vai esperar os await serem resolvidos para depois retornar o valor.
async function fetchData<T>(url: string): Promise<T> {
  const base = "https://api.origamid.dev/json/"; // Armazena a url base da api na variável base.
  // O await está falando para esperar as respostas das requisições para depois armazenar o retorno na variável.
  const response = await fetch(base + url); // Faz uma requisição para a base + url passada como parâmetro e armazena o retorno(a resposta) na variável response.
  return await response.json(); // Transforma a resposta em um objeto JSON e retorna o objeto JSON.
}

// Criado uma interface chamada Jogo que armazena os tipos de dados das propriedades do objeto retornado pela função fetchData.
interface Jogo {
  nome: string;
  ano: number;
  desenvolvedora: string;
  plataformas: string[];
}

// Criado uma interface chamada Livro que armazena os tipos de dados das propriedades do objeto retornado pela função fetchData.
interface Livro {
  nome: string;
  ano: number;
  autor: string;
  paginas: number;
}

// Cria uma função type guard genérica chamada checkInterfaceSimples que armazena uma variável(<>) do tipo genérico chamada Interface que recebe um parâmetro chamado objeto do tipo unknown e um parâmetro chamado key do tipo string e retorna true se o objeto passado como parâmetro possuir as propriedades da interface passada quando chamado a função e false se não possuir.
// O type guard é responsável por verificar se o objeto passado como parâmetro possui as propriedades da interface passada quando chamado a função.
function checkInterfaceSimples<Interface>(
  objeto: unknown,
  key: keyof Interface,
): objeto is Interface {
  // Se o objeto existir, for do tipo objeto e possuir a propriedade passada como parâmetro, executa o if.
  if (objeto && typeof objeto === "object" && key in objeto) {
    return true; // Retorna true;
  } else {
    return false; // Retorna false;
  }
}

// Criado uma função chamada handleData responsável por tratar os dados da api. O async está tornando a função assíncrona, ou seja, ela vai esperar os await serem resolvidos para depois retornar o valor.
async function handleData() {
  // O await está falando para esperar as respostas das requisições para depois armazenar o retorno na variável.
  const jogo = await fetchData("jogo.json"); // Executa a função fetchData passando a url da api como parâmetro.

  const livro = await fetchData("livro.json"); // Executa a função fetchData passando a url da api como parâmetro.

  // Chama a função checkInterfaceSimples passando o tipo da interface Jogo e o objeto jogo e a propriedade desenvolvedora como parâmetros e executa o if se a função retornar true.
  if (checkInterfaceSimples<Jogo>(jogo, "desenvolvedora")) {
    // Agora o type safe está funcionando, pois o TypeScript sabe qual é o tipo de dado que está sendo utilizado, pois ele passou pelo type guard.
    console.log(jogo);
  }

  // Chama a função checkInterfaceSimples passando o tipo da interface Livro e o objeto livro e a propriedade autor como parâmetros e executa o if se a função retornar true.
  if (checkInterfaceSimples<Livro>(livro, "autor")) {
    // Agora o type safe está funcionando, pois o TypeScript sabe qual é o tipo de dado que está sendo utilizado, pois ele passou pelo type guard.
    console.log(livro);
  }
}

handleData(); // Chama a função handleData.
