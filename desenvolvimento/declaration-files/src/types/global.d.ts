//* > .d.ts
/*
  - Podemos criar arquivos focados apenas na declaração de tipos e interfaces, estes devem ser terminados em `**.d.ts**`.
  - O TypeScript não irá compilar eles, mas os tipos declarados poderão ser utilizados globalmente na sua aplicação.
  - Esse tipo de declaração é comum em bibliotecas criadas em JavaScript que desejam dar suporte ao uso da mesma em TypeScript.
*/

interface Produto {
  nome: string;
  preco: number;
}
