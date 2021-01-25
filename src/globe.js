import Controller from "./App/Controllers/Controller";

export class Globe {
    constructor(canvas) {
        this.init(canvas)
    }

    init(canvas) {
        this.controller = new Controller(canvas);
    }
}

