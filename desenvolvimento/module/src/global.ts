//* > Global.

// O export torna o arquivo em type module e não mais em arquivo global.
export const URL_Base = "https://api.origamid.dev/json"; // Criado uma constante URL_Base global que pode ser usada em qualquer arquivo.

// Cria uma interface global chamada Produto que recebe um nome do tipo string e um preço do tipo number.
// O export torna o arquivo em type module e não mais em arquivo global.
export interface Produto {
  nome: string;
  preco: number;
}
