"use strict";
/*
  1. Crie uma interface UserData para o formulário abaixo.
  2. Crie uma variável global UserData no window, ela será um objeto qualquer.
  3. Adicione um evento de keyup ao formulário.
  4. Quando o evento ocorrer adicione a {[id]: value} ao UserData.
  5. Salve UserData no localStorage.
  6. Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData.
  7. Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData.
*/
window.UserData = {}; // Criado uma variável global UserData no window, ela será um objeto vazio.
const form = document.querySelector("#form"); //Está puxando o elemento com id form do html, definindo o tipo como HTMLElement e atribuindo a uma variável chama form.
// Criado uma user type guard chamada isUserData que recebe um parâmetro chamado data do tipo unknown que retorna um boolean, com o uso do is se for true ele está dizendo que o tipo de dado que será retornado é do tipo UserData que é uma interface.
function isUserData(data) {
    // Verifica se o data existe e se o tipo de dado é um objeto e se é um objeto e se o objeto possui as propriedades nome ou email ou cpf, se for true em todas executa o if, se não executa o else.
    if (data &&
        typeof data === "object" &&
        ("nome" in data || "email" in data || "cpf" in data)) {
        return true; // Retorna true.
    }
    else {
        return false; // Retorna false.
    }
}
// Criado uma função chamada validateJSON que recebe um parâmetro chamado json do tipo string que retorna um boolean.
function validateJSON(json) {
    // O try tenta executar o código e caso ocorra algum erro ele executa o catch.
    try {
        return JSON.parse(json);
    }
    catch (error) {
        return false;
    }
    return true; // Caso não caia no try ou no catch ele retorna true.
}
function loadLocalStorage() {
    const localUserData = localStorage.getItem("UserData"); // Acessa o localStorage e pega o valor do item UserData e armazena na variável localUserData.
    // Se o localUserData existir e se a type guard validateJSON for true executa o if.
    if (localUserData && validateJSON(localUserData)) {
        const UserData = JSON.parse(localUserData); // Converte o localUserData de string para objeto e armazena na variável UserData.
        // Se a type guard isUserData for true executa o if.
        if (isUserData(UserData)) {
            // O método Object.entries retorna um array com os atributos e valores do objeto UserData.
            // O forEach está percorrendo o array retornado pelo Object.entries e desestruturando o array em key(a chave) e value(o valor).
            Object.entries(UserData).forEach(([key, value]) => {
                const input = document.querySelector(`#${key}`); // Está puxando o elemento com id igual ao valor da variável key e atribuindo a uma variável chamada input.
                // Se o input existir e se o input for uma instância/referência de HTMLInputElement executa o if.
                if (input instanceof HTMLInputElement) {
                    input.value = value; // Acessa o input e seta o valor(value) do input com o valor da variável value, assim preenchendo o input com o valor do localStorage.
                    window.UserData[key] = value; // Seleciona o window e o atributo UserData(um objeto vazio) e atribui a ele um novo atributo com o nome da variável key e o valor da variável value.
                }
            });
        }
    }
}
loadLocalStorage(); // Chama a função loadLocalStorage.
// Criado uma função chamada handleInput que recebe o parâmetro(desestruturado) target do tipo KeyboardEvent.
function handleInput({ target }) {
    // Faz uma type guard para verificar se o target é uma instância/referência de HTMLInputElement.
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value; // Seleciona o window e o atributo UserData(um objeto vazio) e atribui a ele um novo atributo com o nome do id do input e o valor do input.
        localStorage.setItem("UserData", JSON.stringify(window.UserData)); // Acessa o localStorage e seta o item UserData com o valor do window.UserData convertido de objeto(JSON) para string.
    }
}
form?.addEventListener("keyup", handleInput); // Adiciona um evento de keyup ao formulário e chama a função handleInput caso o form exista.
