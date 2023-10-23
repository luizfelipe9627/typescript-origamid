//* > Exercício 1.
/*
  1. Crie uma função que arredonda um valor passado para cima.
  2. A função pode receber string ou number.
  3. A função deve retornar o mesmo tipo que ela receber.
*/

function arredondar(value: string): string; // Criado uma função overload chamada normalizar que se o valor for do tipo string retorna o tipo string.
function arredondar(value: number): number; // Criado uma função overload chamada normalizar que se o valor for do tipo number retorna o tipo number.
// Criado uma função chamada arredondar que recebe um parâmetro chamado value do tipo string ou number e retorna um tipo string ou number.
function arredondar(value: string | number): string | number {
  // Se o tipo de value for number executa o if, caso contrário executa o else.
  if (typeof value === "number") {
    return Math.ceil(value); // Retorna o valor passado como parâmetro arredondado para cima.
  } else {
    return Math.ceil(Number(value)).toString(); // Retorna o valor passado como parâmetro convertido para number e arredondado para cima e convertido para string.
  }
}

// Com o overload ele sabe qual função chamar dependendo do tipo de dado passado como parâmetro. Se for string chama a primeira função, se for number chama a segunda função.
console.log(arredondar(10.3)); // Mostra no console o número 11.
console.log(arredondar("10.3")); // Mostra no console a string "11".
