// Criado uma classe chamada Slide.
class Slide {
  // Para funcionar no this do construtor, a propriedade precisa ser criada fora do construtor, com o exato nome que será passado no construtor, nesse caso não precisa definir os tipos das propriedades, por já ter sido definidas no construtor.
  container;
  elements;
  controls;
  time;

  // O construtor deve receber o container do slide, os elementos do slide e os controles do slide e o tempo para trocar de slide, se não for passado o tempo, o padrão será 5000ms
  constructor(
    container: Element,
    elements: Element[],
    controls: Element,
    time: number = 5000,
  ) {
    // Está atribuindo os valores dos parâmetros para as propriedades da classe pai(Slide).
    this.container = container;
    this.elements = elements;
    this.controls = controls;
    this.time = time;
    console.log(this.container)
  }
}

export default Slide; // Está exportando a classe Slide para ser usada em outro arquivo.
