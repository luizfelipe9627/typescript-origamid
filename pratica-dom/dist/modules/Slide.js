class Slide {
    container;
    slides;
    controls;
    time;
    index;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        this.show(0);
    }
    hide(element) {
        element.classList.remove("active");
    }
    show(index) {
        this.index = index;
        this.slides.forEach((slide) => this.hide(slide));
        this.slides[index].classList.add("active");
    }
}
export default Slide;
//# sourceMappingURL=Slide.js.map