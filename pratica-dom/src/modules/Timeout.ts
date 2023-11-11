class Timeout {
  // Para funcionar no this do construtor, a propriedade precisa ser criada fora do construtor, com o exato nome que será passado no construtor.
  id;
  handler;

  // O construtor deve receber o handler(uma função, seja ela anônima ou não) e o tempo para executar o handler(a função).
  constructor(handler: TimerHandler, time: number) {
    this.id = setTimeout(handler, time); // Armazena o valor do setTimeout em uma propriedade id, excutando o setTimeout passando o handler e o tempo como parâmetro.
    this.handler = handler;
  }

  // O método clear é responsável por limpar o setTimeout.
  clear() {
    clearTimeout(this.id); // Está limpando o setTimeout passando o id como parâmetro.
  }
}

export default Timeout;
