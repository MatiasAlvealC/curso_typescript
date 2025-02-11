// casteo
// el casteo es para pasar variables de un tipo a otro


interface Geometria {
  lados: number
  pintar(): void
}

interface Triangulo extends Geometria {
  base: number
  altura: number
}

interface Cuadrado extends Geometria {
  lado: number
}

function procesar (n: Geometria) {
  if (n.lados == 4) {
    let cuadrado = n as Cuadrado
    cuadrado.lado
  } else if (n.lados == 3) {
    let triangulo = n as Triangulo
    triangulo.altura
  }
}

// tambien es posible hacer check que sirven para comprobar tipos
// instanceof