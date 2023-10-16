"use strict";
//* > Exercício 1
// Definido o parâmetro como string, pois o método trim() e toLowerCase() só existe para strings.
function normalizarTexto(texto) {
    return texto.trim().toLowerCase(); // Arrumado os nomes dos métodos que estavam errados.
}
console.log(normalizarTexto("   OlÁ, TuDo BeM?   "));
//* > Exercício 2
const input = document.querySelector("input");
const total = localStorage.getItem("total");
// Se o input e o total existirem, então eles não serão null, o que resolve o problema de tipagem.
if (input && total) {
    input.value = total;
    calcularGanho(Number(input.value));
}
function calcularGanho(value) {
    const p = document.querySelector("p");
    // Se o p existir, então ele não será null, o que resolve o problema de tipagem.
    if (p) {
        p.innerText = `Ganho total: R$ ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    // Se o input existir, então ele não será null, o que resolve o problema de tipagem.
    if (input) {
        localStorage.setItem("total", input.value); // Passado o input.value ao invés do value, pois o value não existe é do tipo number e o localStorage só aceita string.
        calcularGanho(Number(input.value)); // Passa o input.value já convertido para number para o método calcularGanho.
    }
}
// Se o input existir, então ele não será null, o que resolve o problema de tipagem.
if (input) {
    input.addEventListener("keyup", totalMudou);
}
