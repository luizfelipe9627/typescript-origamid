// Criado uma classe chamada Slide.
class Slide {
  // Para funcionar no this do construtor, a propriedade precisa ser criada fora do construtor, com o exato nome que será passado no construtor, nesse caso não precisa definir os tipos das propriedades, por já ter sido definidas no construtor.
  container;
  slides;
  controls;
  time;
  index;

  // O construtor deve receber o container do slide, os elementos do slide e os controles do slide e o tempo para trocar de slide, se não for passado o tempo, o padrão será 5000ms
  constructor(
    container: Element,
    slides: Element[],
    controls: Element,
    time: number = 5000,
  ) {
    // Está atribuindo os valores dos parâmetros para as propriedades da classe pai(Slide).
    this.container = container;
    this.slides = slides;
    this.controls = controls;
    this.time = time;

    this.show(0); // Está chamando o método show passando o index 0 para mostrar o primeiro slide como padrão.
  }

  // Criado um método chamado hide que recebe um elemento do tipo Element, é responsável por fazer o slide desaparecer.
  hide(element: Element) {
    element.classList.remove("active"); // Está removendo a classe active do elemento passado como parâmetro.
  }

  // Criado um método chamado show que recebe um index do tipo number, é responsável por fazer o slide aparecer.
  show(index: number) {
    this.index = index; // Está atribuindo o valor do index passado como parâmetro para a propriedade index da classe pai(Slide).

    this.slides.forEach((slide) => this.hide(slide)); // O forEach está percorrendo o array de slides e para cada slide está chamando o método hide passando o slide como parâmetro.
    this.slides[index].classList.add("active"); // Está adicionando a classe active no slide que foi passado como parâmetro.
  }
}

export default Slide; // Está exportando a classe Slide para ser usada em outro arquivo.
