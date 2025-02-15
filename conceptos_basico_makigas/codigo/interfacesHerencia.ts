// herencia de interfaces

interface Vehiculo {
  readonly fabricante: string
  arrancar(): void
  repostar(): void
  detenerMotor(): void
}

interface VehiculoTerrestre extends Vehiculo{
  conducir(): void
}

interface VehiculoMarino extends Vehiculo{
  sonarSirena(): void
  encenderChimenea(): void
  detenerChimenea(): void
}


class OpelCorsa implements VehiculoTerrestre {
  fabricante: string
  arrancar(): void {
    console.log("turuuuuu")
  }
  repostar(): void {
    console.log("aaaaa")
  }
  detenerMotor(): void {
    console.log("pipipipi")
  }
  conducir(): void {
    console.log("brumbrumbrum")
  }

  abrirMaletero(): void {
    
  }
}