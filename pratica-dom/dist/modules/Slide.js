class Slide {
    container;
    elements;
    controls;
    time;
    constructor(container, elements, controls, time = 5000) {
        this.container = container;
        this.elements = elements;
        this.controls = controls;
        this.time = time;
        console.log(this.container);
    }
}
export default Slide;
//# sourceMappingURL=Slide.js.map