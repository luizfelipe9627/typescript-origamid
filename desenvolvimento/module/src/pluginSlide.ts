//* > Module.

// Criado uma função chamada pluginSlide que recebe um seletoer do tipo string.
function pluginSlide(seletoer: string) {
  console.log(`Criar slide: ${seletoer}`); // Mostra no console uma mensagem conforme o seletor passado.
}

// Quando exportamos uma função, o arquivo se torna type module.
export default pluginSlide; // Está exportando a função pluginSlide para que seja usada em outro arquivo.
