import countBy from "./countBy.js";

type TransacaoValor = Transacao & { valor: number }; // Criado um tipo chamado TransacaoValor que recebe a interface Transacao, sendo assim cria uma nova interface com os mesmos valores da interface Transacao e adiciona a propriedade valor do tipo number.

// Criado uma função chamada filtrarValor que cria um parâmetro chamado transacao do tipo Transacao(interface) e retorna um boolean, no caso se transacao for do tipo TransacaoValor retorna true, se não retorna false.
function filtrarValor(transacao: Transacao): transacao is TransacaoValor {
  return transacao.valor !== null; // Retorna true se o valor da transação for diferente de null.
}

// Criado uma classe chamada Statistics.
class Statistics {
  // Para funcionar no this do construtor, a propriedade precisa ser criada fora do construtor, com o exato nome que será passado no construtor e o seu valor.
  private transacoes; // O private deixa a propriedade transacoes privada, ou seja, só pode ser acessada dentro da classe.
  total;
  pagamento;
  status;

  // O construtor é responsável pela definição das propriedades/parâmetros da classe. O construtor recebe um parâmetro obrigatório chamado transacoes do tipo interface Transacao[] e não retorna nada.
  constructor(transacoes: Transacao[]) {
    // Está atribuindo o valor do parâmetro para a propriedade da classe pai(Statistics).
    this.transacoes = transacoes;
    // Está atribuindo o valor das propriedades para os métodos privados da classe.
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
  }

  // Criado um método privado(não pode ser acessado fora da classe) chamado setTotal que não recebe nenhum parâmetro e não retorna nada, responsável por definir o valor total das transações.
  private setTotal() {
    // Retorna o valor total das transações.
    return (
      this.transacoes
        // O filter passa por cada item do array transacoes e executa a função filtrarValor, criando um novo array com os itens que retornaram true.
        .filter(filtrarValor)
        // O reduce passa por cada item do array e executa a função, o primeiro parâmetro é o acumulador e o segundo é o item atual que no caso está sendo desestruturado para pegar apenas o valor da transação. O valor inicial do acumulador é 0.
        .reduce((acc, { valor }) => {
          return (acc += valor); // Retorna o valor do acumulador mais o valor da transação.
        }, 0)
    );
  }

  // Criado um método privado(não pode ser acessado fora da classe) chamado setPagamento que não recebe nenhum parâmetro e não retorna nada, responsável por definir a quantidade de cada tipo de pagamento.
  private setPagamento() {
    return countBy(this.transacoes.map(({ pagamento }) => pagamento)); // Retorna o resultado da função countBy passando como parâmetro o array de pagamentos, sendo assim retorna um objeto com a quantidade de cada tipo de pagamento.
  }

  // Criado um método privado(não pode ser acessado fora da classe) chamado setStatus que não recebe nenhum parâmetro e não retorna nada, responsável por definir a quantidade de cada tipo de status.
  private setStatus() {
    return countBy(this.transacoes.map(({ status }) => status)); // Retorna o resultado da função countBy passando como parâmetro o array de status, sendo assim retorna um objeto com a quantidade de cada tipo de status.
  }
}

export default Statistics; // Exporta a classe Statistics para ser usada em outro arquivo.
