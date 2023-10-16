//* > Union Types.

let total: string | number = 200; // Cria uma variável chamada total que aceita/recebe o tipo string ou number tendo o valor inicial de 200.
total = "300"; // Está atribuindo uma string a variável total.
total = 400; // Está atribuindo um number a variável total.
// total = false; // Irá dar erro, pois a variável total só aceita/recebe string ou number.

//* > Funções.

function isNumber(value: string | number) {
  if (typeof value === "number") {
    return true;
  } else {
    return false;
  }
}

console.log(isNumber(200)); // Irá retornar true, pois o valor passado é um number.
console.log(isNumber("200")); // Irá retornar false pois o valor passado é uma string.

//* > Dom.

const button = document.querySelector("button"); // Seleciona o primeiro elemento button do documento.

button?.click(); // Irá clicar no botão, caso ele seja difernete de null ou undefined, por isso o uso do operador de opcionalidade (?).
