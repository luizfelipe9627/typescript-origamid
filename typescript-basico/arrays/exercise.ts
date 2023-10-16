// 1. Defina a interface da API e mostre os dados na tela.
// 2. Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.

// Criado uma função chamada fetchCursos que irá buscar os dados da API.
async function fetchCursos() {
  const response = await fetch("https://api.origamid.dev/json/cursos.json"); // Criado uma variável chamada response que armazena a promisse da API.
  const data = await response.json(); // Criado uma variável chamada data que armazena os dados da API em formato JSON.
  return mostrarCursos(data); // Retorna a função showProduct com os dados da API.
}

// Criado uma interface chamada Curso que define os tipos de dados da API. Os nome das propriedades devem ser iguais aos da API.
interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[]; // Criado uma propriedade chamada tags que é um array de strings.
  idAulas: number[]; // Criado uma propriedade chamada idAulas que é um array de números.
  nivel: "iniciante" | "avancado"; // Criado uma propriedade chamada nivel que é um string com os valores "iniciante" ou "avancado".
}

// Criado uma função chamada mostrarCursos que irá mostrar os dados da API na tela.
function mostrarCursos(data: Array<Curso>) {
  data.forEach((curso) => {
    let color; // Criado uma variável vazia chamada color.
    // Se o curso for iniciante, a variável color recebe a string "blue", se não, se o curso for avançado, a variável color recebe a string "red".
    if (curso.nivel === "iniciante") {
      color = "blue";
    } else if (curso.nivel === "avancado") {
      color = "red";
    }

    // Cria um elemento HTML no body da página com os dados da API.
    document.body.innerHTML += `
      <div>
        <h2 style="color: ${color}">${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
        <p>Aulas: ${curso.aulas}</p>
        <p>Gratuito: ${curso.gratuito ? "Sim" : "Não"}</p>
        <p>Tags: ${curso.tags.join(", ")}</p>
        <p>Id Aulas: ${curso.idAulas.join(" | ")}</p>
        <p>Nível: ${curso.nivel}</p>
      </div>
  `;
  });
}

fetchCursos(); // Está chamando a função fetchCursos.
