// class

class Rectangulo {
  ancho: number;
  alto: number;
  
  constructor(ancho:number, alto:number) {
    console.log("Constructor()")
    this.ancho = ancho
    this.alto = alto
  }

  area() {
    console.log("area()")
    return this.ancho * this.alto
  }
  perimetro() {
    console.log("perimetro()")
    return this.alto *2 + this.ancho*2
  }
}

let r1 = new Rectangulo(5,6);
let r2 = new Rectangulo(7,15);

console.log(r1.area())