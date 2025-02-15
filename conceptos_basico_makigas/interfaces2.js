"use strict";
// implementaciones de interfaces
function process(s) {
    // do something
    console.log({ area: s.area() });
}
class Rectangule {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
    permeter() {
        return 2 * this.width + 2 * this.height;
    }
}
let r = new Rectangule(5, 6);
process(r);
