// class
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, alto) {
        console.log("Constructor()");
        this.ancho = ancho;
        this.alto = alto;
    }
    Rectangulo.prototype.area = function () {
        console.log("area()");
        return this.ancho * this.alto;
    };
    Rectangulo.prototype.perimetro = function () {
        console.log("perimetro()");
        return this.alto * 2 + this.ancho * 2;
    };
    return Rectangulo;
}());
var r1 = new Rectangulo(5, 6);
var r2 = new Rectangulo(7, 15);
console.log(r1.area());
