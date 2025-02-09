// class
var Rectangulo = /** @class */ (function () {
    function Rectangulo(ancho, alto) {
        console.log("Constructor()");
        this.ancho = ancho;
        this.alto = alto;
    }
    Object.defineProperty(Rectangulo.prototype, "nombre", {
        get: function () {
            console.log("obtengo el nombre");
            return this._nombre;
        },
        set: function (value) {
            console.log("Seteo el nomre");
            this._nombre = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangulo.prototype, "area", {
        get: function () {
            console.log("area()");
            return this.ancho * this.alto;
        },
        enumerable: false,
        configurable: true
    });
    Rectangulo.prototype.perimetro = function () {
        console.log("perimetro()");
        return this.alto * 2 + this.ancho * 2;
    };
    return Rectangulo;
}());
var r1 = new Rectangulo(5, 6);
var r2 = new Rectangulo(7, 15);
console.log(r1.area);
r1.nombre = "Juan";
console.log("El nombre del rectangulo es: ".concat(r1.nombre));
