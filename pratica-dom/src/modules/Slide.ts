import Timeout from "./Timeout.js";

// Criado uma classe chamada Slide.
class Slide {
  // Para funcionar no this do construtor, a propriedade precisa ser criada fora do construtor, com o exato nome e tipo que será passado no construtor.
  container: Element;
  slides: Element[];
  controls: Element;
  time: number;
  index: number;
  slide: Element;
  timeout: Timeout | null;

  // O construtor deve receber o container do slide, os elementos do slide e os controles do slide e o tempo para trocar de slide, se não for passado o tempo, o padrão será 5000ms.
  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000,
  ) {
    // Está atribuindo os valores dos parâmetros para as propriedades da classe pai.
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;

    this.timeout = null; // Está atribuindo o valor null para a propriedade timeout como padrão.
    this.index = 0; // Está atribuindo o valor 0 para a propriedade index como padrão.

    this.slide = this.slides[this.index]; // Está atribuindo o valor do slide que está no index para a propriedade slide.

    this.init(); // Está chamando o método init responsável por iniciar o slide e seus controles.
  }

  // Criado um método chamado hide que recebe um elemento do tipo Element, é responsável por fazer o slide desaparecer.
  hide(element: Element) {
    element.classList.remove("active"); // Está removendo a classe active do elemento passado como parâmetro.
  }

  // Criado um método chamado show que recebe um index do tipo number, é responsável por fazer o slide aparecer.
  show(index: number) {
    this.index = index; // Está atribuindo o valor do index passado como parâmetro para a propriedade index da classe pai.
    this.slide = this.slides[this.index]; // Está atribuindo  o valor do slide que está no index passado como parâmetro para a propriedade slide da classe pai.
    this.slides.forEach((slide) => this.hide(slide)); // O forEach está percorrendo o array de slides e para cada slide está chamando o método hide passando o slide como parâmetro.
    this.slide.classList.add("active"); // Está adicionando a classe active para o slide que está na propriedade slide da classe pai.
    this.auto(this.time); // Está chamando/executando o método auto passando o tempo de troca de slide como parâmetro.
  }

  // Criado um método chamado auto que recebe um time do tipo number, é responsável por fazer o slide trocar automaticamente após um tempo.
  auto(time: number) {
    this.timeout?.clear(); // Está limpando o setTimeout se ele existir.
    
    // Está instanciando a classe Timeout e atribuindo as propriedades handler(uma função, seja ela anônima ou não) e o tempo para executar o handler(a função).
    this.timeout = new Timeout(() => this.next(), time); // Executa o método next após o tempo passado como parâmetro.
  }

  // Criado um método chamado prev, é responsável por fazer o slide voltar para o anterior.
  prev() {
    const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1; // Está atribuindo o valor do index - 1 para a constante prev se o index for maior que 0, se não for maior, atribui o valor do tamanho do array de slides - 1, fazendo o slide voltar para o último.

    this.show(prev); // Está chamando/executando o método show passando o resultado da constante prev como parâmetro fazendo o slide voltar para o anterior.
  }

  // Criado um método chamado next, é responsável por fazer o slide avançar.
  next() {
    const next = this.index + 1 < this.slides.length ? this.index + 1 : 0; // Está atribuindo o valor do index + 1 para a constante next se o index + 1 for menor que o tamanho do array de slides, se não for menor, atribui o valor 0, fazendo o slide voltar para o primeiro.

    this.show(next); // Está chamando/executando o método show passando o index + 1 como parâmetro fazendo o slide avançar.
  }

  // Criado um método privado(ou seja, só pode ser chamado/executado dentro da classe) chamado addControls, é responsável por adicionar os controles do slide.
  private addControls() {
    const prevButton = document.createElement("button"); // Está criando um elemento button e atribuindo para a constante prevButton.
    const nextButton = document.createElement("button"); // Está criando um elemento button e atribuindo para a constante nextButton.

    this.controls.appendChild(prevButton); // Está adicionando o elemento prevButton como filho do elemento controls.
    this.controls.appendChild(nextButton); // Está adicionando o elemento nextButton como filho do elemento controls.

    prevButton.innerText = "Slide anterior"; // Está atribuindo um texto para o elemento prevButton.
    nextButton.innerText = "Próximo slide"; // Está atribuindo um texto para o elemento nextButton.

    // Está criando um evento do tipo pointerup(é disparado quando o mouse ou o dedo é removido do elemento) para os elementos e quando acionados executam uma função.
    prevButton.addEventListener("pointerup", () => this.prev());
    nextButton.addEventListener("pointerup", () => this.next());
  }

  // Criado um método privado(ou seja, só pode ser chamado/executado dentro da classe) chamado init, é responsável por iniciar o slide e seus controles.
  private init() {
    this.addControls(); // Está chamando/executando o método addControls.
    this.show(this.index); // Está chamando/executando o método show passando o index como parâmetro.
  }
}

export default Slide; // Está exportando a classe Slide para ser usada em outro arquivo.
