"use strict";
// 1. Defina a interface da API e mostre os dados na tela.
// 2. Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
async function fetchCursos() {
    const response = await fetch("https://api.origamid.dev/json/cursos.json");
    const data = await response.json();
    return mostrarCursos(data);
}
function mostrarCursos(data) {
    data.forEach((curso) => {
        let color;
        if (curso.nivel === "iniciante") {
            color = "blue";
        }
        else if (curso.nivel === "avancado") {
            color = "red";
        }
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
fetchCursos();
