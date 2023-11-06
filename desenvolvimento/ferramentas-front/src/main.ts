// Criado uma interface chamada Produto que possui dois atributos: nome e autor.
interface Produto {
  nome: string;
  autor: string;
}

// Criado um objeto chamado livro do tipo Produto.
const livro: Produto = {
  nome: "O Senhor dos Anéis",
  autor: "J. R. R. Tolkien",
};

// Importado a biblioteca lodash.
// Como a biblioteca não vem com os types, foi necessário instalar o @types/lodash.
import _ from "lodash";

console.log(_.difference([2, 1, 3], [2, 3, 4])); // Mostra no console a diferença entre os dois arrays.

// Importado a biblioteca clipboard.
// A biblioteca clipboard já vem com os types, por isso não foi necessário instalar o @types/clipboard.
import ClipboardJS from "clipboard";

const button = new ClipboardJS("button"); // Criado uma constante chamada button que recebe um novo objeto da classe clipboard passando como parâmetro o button do html.

// Criado uma função chamada handleCopy que recebe um evento do tipo ClipboardJS.Event presente na biblioteca clipboard, assim dando acesso as propriedades do evento.
function handleCopy(event: ClipboardJS.Event) {
  event.clearSelection(); // Limpa a seleção do texto.
  console.log(event.action, event.text); // Mostra no console a ação e o texto copiado.
}

// Quando o botão for clicado e o texto for copiado(sucesso), será chamado a função handleCopy.
button.on("success", handleCopy);
