import Timeout from "./Timeout.js";
class Slide {
    container;
    slides;
    controls;
    time;
    index;
    slide;
    timeout;
    pausedTimeout;
    paused;
    thumbItems;
    thumb;
    constructor(container, slides, controls, time = 5000) {
        this.container = container;
        this.slides = slides;
        this.controls = controls;
        this.time = time;
        this.timeout = null;
        this.pausedTimeout = null;
        this.index = localStorage.getItem("activeSlide")
            ? Number(localStorage.getItem("activeSlide"))
            : 0;
        this.slide = this.slides[this.index];
        this.paused = false;
        this.thumbItems = null;
        this.thumb = null;
        this.init();
    }
    hide(element) {
        element.classList.remove("active");
        if (element instanceof HTMLVideoElement) {
            element.currentTime = 0;
            element.pause();
        }
    }
    show(index) {
        this.index = index;
        this.slide = this.slides[this.index];
        localStorage.setItem("activeSlide", this.index.toString());
        if (this.thumbItems) {
            this.thumb = this.thumbItems[this.index];
            this.thumbItems.forEach((thumb) => thumb.classList.remove("active"));
            this.thumb.classList.add("active");
        }
        this.slides.forEach((slide) => this.hide(slide));
        this.slide.classList.add("active");
        if (this.slide instanceof HTMLVideoElement) {
            this.autoVideo(this.slide);
        }
        else {
            this.auto(this.time);
        }
    }
    autoVideo(video) {
        video.muted = true;
        video.play();
        let firstPlay = true;
        video.addEventListener("playing", () => {
            if (firstPlay) {
                this.auto(video.duration * 1000);
                firstPlay = false;
            }
        });
    }
    auto(time) {
        this.timeout?.clear();
        this.timeout = new Timeout(() => this.next(), time);
        if (this.thumb) {
            this.thumb.style.animationDuration = `${time}ms`;
        }
    }
    prev() {
        if (this.paused)
            return;
        const prev = this.index > 0 ? this.index - 1 : this.slides.length - 1;
        this.show(prev);
    }
    next() {
        if (this.paused)
            return;
        const next = this.index + 1 < this.slides.length ? this.index + 1 : 0;
        this.show(next);
    }
    pause() {
        document.body.classList.add("paused");
        this.pausedTimeout = new Timeout(() => {
            this.timeout?.pause();
            this.paused = true;
            this.thumb?.classList.add("paused");
            if (this.slide instanceof HTMLVideoElement) {
                this.slide.pause();
            }
        }, 300);
    }
    continue() {
        document.body.classList.remove("paused");
        this.pausedTimeout?.clear();
        if (this.paused) {
            this.paused = false;
            this.timeout?.continue();
            this.thumb?.classList.remove("paused");
            if (this.slide instanceof HTMLVideoElement) {
                this.slide.play();
            }
        }
    }
    addControls() {
        const prevButton = document.createElement("button");
        const nextButton = document.createElement("button");
        prevButton.innerText = "Slide anterior";
        nextButton.innerText = "Próximo slide";
        this.controls.appendChild(prevButton);
        this.controls.appendChild(nextButton);
        this.controls.addEventListener("pointerdown", () => this.pause());
        document.addEventListener("pointerup", () => this.continue());
        document.addEventListener("touchend", () => this.continue());
        prevButton.addEventListener("pointerup", () => this.prev());
        nextButton.addEventListener("pointerup", () => this.next());
    }
    addThumbItems() {
        const thumbContainer = document.createElement("div");
        thumbContainer.id = "slide-thumb";
        for (let i = 0; i < this.slides.length; i++) {
            thumbContainer.innerHTML += `
        <span>
          <span class="thumb-item"></span>
        </span>
      `;
            this.controls.appendChild(thumbContainer);
            this.thumbItems = Array.from(document.querySelectorAll(".thumb-item"));
        }
    }
    init() {
        this.addControls();
        this.addThumbItems();
        this.show(this.index);
    }
}
export default Slide;
//# sourceMappingURL=Slide.js.map