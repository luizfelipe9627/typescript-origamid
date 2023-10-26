//* > Unknown.
/*
  - Indica que não sabemos o tipo de dados que pode ser passado. Diferente do any, o unknown só irá permitir o uso de métodos quando a Type Safety estiver garantida.
*/

// Criado uma função chamada typeGuard que recebe um parâmetro do tipo unknown, ou seja, não sabemos o tipo de dado que será passado e por isso ele só irá permitir o uso de métodos quando a Type Safety estiver garantida.
function typeGuard(value: unknown) {
  // Verifica se o tipo de dado é uma string. Está garantindo a Type Safety ou seja, o TypeScript sabe que o tipo de dado é uma string.
  if (typeof value === "string") {
    return value.toUpperCase(); // Error.
  }
  // Verifica se o tipo de dado é um número. Está garantindo a Type Safety ou seja, o TypeScript sabe que o tipo de dado é um número.
  if (typeof value === "number") {
    return value.toFixed(); // Retorna o número com casas decimais.
  }
  // Verifica se o value é uma instância/referência de HTMLElement. Está garantindo a Type Safety ou seja, o TypeScript sabe que o tipo de dado é uma instância de HTMLElement.
  if (value instanceof HTMLElement) {
    return value.innerHTML; // Retorna o conteúdo HTML do elemento.
  }
}

console.log(typeGuard("Hello World")); // Mostra HELLO WORLD no console.
console.log(typeGuard(1234)); // Mostra 1234 no console.
console.log(typeGuard(document.body)); // Mostra o conteúdo HTML do elemento body no console.
