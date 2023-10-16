"use strict";
//* > Any implicito.
// Criado uma função chamado normalizar que recebe um texto do tipo any.
function normalizar(texto) {
    // O VS Code não irá reclamar e nem autocompletar o texto pois ele é do tipo any(qualquer tipo de dado).
    return texto.trim().toLowerCase(); // Retorna o texto sem espaços e em caixa baixa(minúsculo).
}
console.log(normalizar(" DeSiGn ")); // Irá retornar no console o texto sem espaços e em caixa baixa(minúsculo).
// console.log(normalizar(123)); // Irá retornar no console um erro pois os métodos trim e toLowerCase não existem no tipo number.
//* > Uso do any.
// Criado uma função chamada fetchJSON que recebe uma url do tipo string. O async está sendo usado para que só seja retornado o resultado da função quando a promise for resolvida.
async function fetchJSON(url) {
    // O await está sendo usado para que a função só continue a ser executada quando a promise for resolvida.
    const response = await fetch(url); // Armazena uma Response na variável response.
    const data = await response.json(); // Armazena o tipo Any na variável data pois o json pode retornar qualquer tipo de dado.
    manipularDados(data); // Executa a função manipularDados passando a variável data como parâmetro.
}
fetchJSON("https://api.origamid.dev/json/cursos.json"); // Executa a função fetchJSON passando a url como parâmetro.
function manipularDados(data) {
    return console.log(data.nome); // Mostra undefined no console pois está sendo passado um tipo any para a função para o parâmetro data que é do tipo string, resultando assim em undefined.
}
// Criado uma funçãp chamada mostrarCursos que recebe um array de objetos do tipo Curso.
function mostrarCursos(cursos) {
    // O forEach está sendo usado para percorrer o array de objetos do tipo Curso.
    cursos.forEach((curso) => {
        // Renderiza no body do HTML o nome e as horas de cada curso.
        document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
    });
}
const dados = "o any gera problemas"; // Armazena o tipo any contendo uma string na variável dados.
console.log(mostrarCursos(dados)); // Irá mostrar no console um erro pois a função mostrarCursos está esperando um array de objetos do tipo Curso e está recebendo um tipo any contendo uma string.
