// 1 - Crie uma função chamada toNumber.
// 2 - A função pode receber number | string.
// 3 - Se a função receber um número, retorne um número.
// 4 - Se a função receber uma string, retorne um número.
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string").

// Criado uma função chamada toNumber que pode receber o tipo de dado number | string.
function toNumber(value: number | string) {
  // Se o tipo de dado presente no value for number, retorne um número.
  if (typeof value === "number") {
    return value;
  } // Se não, se o tipo de dado presente no value for string, retorne a string convertida em número.
  else if (typeof value === "string") {
    return Number(value);
  } // Se não, retorne um erro. Se não for passado um else no final ele irá retornar null.
  else {
    throw "Value deve ser um número ou uma string.";
  }
}

console.log(toNumber("3000")); // Irá retornar o tipo number 3000 no console.
console.log(toNumber(1500)); // Irá retornar o tipo number 1500 no console.
// console.log(toNumber(true)); // Irá dar erro, pois o valor passado é um boolean.
