"use strict";
//* > Any.
const button = document.querySelector("button"); // Criado uma constante button que recebe o elemento button do HTML, ele recebe dois tipos de dados, HTMLButtonElement se o botão existir e null se não existir.
const config = localStorage.getItem("config"); // Criado uma constante config que puxa o item config do localStorage, ele recebe dois tipos de dados, string se o item existir e null se não existir.
// Para não dar erro caso o botão não exista, é necessário fazer uma verificação.
if (button) {
    button.click();
}
// Uma forma alternativa é verificar se é diferente de null.
if (button !== null) {
    button.click();
}
button?.click(); // Outra forma é usando o operador ? que verifica se o botão existe, se existir ele executa o click, se não existir ele não executa nada.
//* > Undefined.
let total; // Criado uma variável total sem um valor inicial.
console.log(total); // Retorna undefined, pois a variável não foi inicializada.
function teste() { }
console.log(teste()); // Retorna undefined, pois a função não tem um retorno.
console.log(typeof total); // Mostra undefined no console, que é o tipo da variável.
// Assim como o null podemos usar uma condição para evitar o erro de undefined.
if (total) {
    console.log("Existe um valor em total."); // Mostra no console.
}
else {
    console.log("Não existe um valor em total."); // Mostra no console.
}
// Criado um objeto chamado jogo que recebe a interface Product que está atribuindo a propridade nome com a string Ragnarok.
const jogo = {
    nome: "Ragnarok",
};
// Criado um objeto chamado livro que recebe a interface Product que não está atribuindo nada para a propridade nome.
const livro = {};
jogo.nome?.toLowerCase(); // Está acessando o objeto jogo e verificando se existe a propriedade nome existe, se existir e for sring ele executa o toLowerCase, se não existir ele não executa nada, por isso o uso do ?.
// livro.nome.toLocaleUpperCase(); // Da erro, pois a propriedade nome provavalmente não existe no objeto livro, por isso o uso do ? seria necessário.
// Para evitarmos de dar erro e de usarmos o ? em todas as propriedades, podemos usar uma condição.
if (livro.nome) {
    livro.nome.toLocaleUpperCase();
}
