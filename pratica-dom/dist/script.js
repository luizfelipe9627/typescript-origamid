import Slide from "./modules/Slide.js";
const container = document.getElementById("slide");
const elements = document.getElementById("slide-elements");
const controls = document.getElementById("slide-controls");
if (container && elements && controls && elements.children.length) {
    new Slide(container, Array.from(elements.children), controls, 5000);
}
//# sourceMappingURL=script.js.map