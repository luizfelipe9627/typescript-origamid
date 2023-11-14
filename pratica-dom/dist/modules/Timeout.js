class Timeout {
    id;
    handler;
    start;
    timeLeft;
    constructor(handler, time) {
        this.id = setTimeout(handler, time);
        this.handler = handler;
        this.start = Date.now();
        this.timeLeft = time;
    }
    clear() {
        clearTimeout(this.id);
    }
    pause() {
        const timePassed = Date.now() - this.start;
        this.timeLeft = this.timeLeft - timePassed;
        this.clear();
    }
    continue() {
        this.clear();
        this.id = setTimeout(this.handler, this.timeLeft);
        this.start = Date.now();
    }
    getTimeRemaining() {
        const timePassed = Date.now() - this.start;
        return Math.max(0, this.timeLeft - timePassed);
    }
}
export default Timeout;
//# sourceMappingURL=Timeout.js.map