//* > Declarando functions.
/*
  A interface de uma função é definida durante a sua declaração.
*/

// Criado uma função chamada somar que recebe três parâmetros do tipo number sendo que o último é opcinal, e retorna um tipo number.
// Em function usamos o operador "?" para indicar que o parâmetro é opcional.
function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0); // Retorna a soma dos três parâmetros, sendo que o terceiro se for usado, será somado, caso contrário será somado 0.
}

console.log(somar(1, 2, 5)); // Chamando a função somar e passando dois parâmetros do tipo number.

// Criado uma função chamada subtrair que recebe dois parâmetros do tipo number.
const subtrair = (a: number, b: number) => {
  return a - b; // Retorna a subtração dos dois parâmetros.
};

console.log(subtrair(10, 5));

//* > Void.
/* 
  O tipo void é usado para indicar que uma função não retorna nada.
*/

type Callback = (event: MouseEvent) => void; // Criado um tipo chamado Callback que recebe um parâmetro chamado event do tipo MouseEvent e não retorna nada(void).

// Criado uma função chamada pintarTela que recebe um parâmetro do tipo string e não retorna nada(void).
function pintarTela(cor: string): void {
  document.body.style.backgroundColor = cor; // Muda a cor de fundo do body para a cor passada como parâmetro.
}

console.log(pintarTela("#C9C9C9")); // Chama a função pintarTela e passando a cor #C9C9C9 como parâmetro. No console será mostrado undefined, pois a função não retorna nada, sendo assim o tipo de retorno é void.

const btn = document.querySelector("button"); // Seleciona o elemento button e armazena na variável btn.

// O operador ? é chamado de optional chaining, ele verifica se o objeto existe antes de acessar a propriedade, se não existir ele não executa o código seguinte.
btn?.click(); // O método click por exemplo, não retorna nada, sendo seu tipo void.
