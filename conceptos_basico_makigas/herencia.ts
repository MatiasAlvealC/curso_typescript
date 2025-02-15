// herencia 

abstract class Vehiculo {
  protected fabricante: string
  
  constructor(fabricante:string) {
    this.fabricante = fabricante
  }
  moverse() {
    console.log(`El vehiculo ${this.fabricante} se ha movido magiacamente`)
  }
}

class VehiculoTerrestre extends Vehiculo {
  private tipo: string
  constructor(fabricante:string, tipo:string) {
    super(fabricante)
    this.tipo = tipo
  }
  moverse() {
    console.log(`Brumm bruum hace mi ${this.tipo}`)
    super.moverse
  }

  repara() {
    console.log(`un momento que me leo el manual de intrucciones de ${this.fabricante}`)
  }

}

class VehiculoAereo extends Vehiculo{
  moverse() {
    console.log("niuuuuun")   
    super.moverse
  }

}

class VehiculoMarino extends Vehiculo {
  moverse() {
      console.log("*el ruido del mar*")
      super.moverse
  }

}

let v1: VehiculoTerrestre = new VehiculoTerrestre("Toyota","automovil");

v1.moverse()
v1.repara()