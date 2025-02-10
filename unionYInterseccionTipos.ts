// Union de tipos

// union tipo o 
type A = {
  uno: boolean;
  dos: boolean;
}

type B = {
  tres: boolean;
}

let valor: A | B = { uno: true, dos: true }
let valor2: A | B = { tres: false }


// union con tipos literales

type OperacionSuma = {
  sumando1: number,
  sumando2: number,
  tipo: "suma"
}

type OperacionMultiplicar = {
  operando1: number,
  operando2: number,
  tipo: "multiplicar"
}

type Operacion = OperacionSuma | OperacionMultiplicar

function operar(o: Operacion) {
  if (o.tipo == "suma") {
    return o.sumando1 + o.sumando2
  } else if (o.tipo =="multiplicar") {
    return o.operando1 * o.operando2
  }
}


// interseccion

type Coordenada = [x: number, y: number]
type Vector =[x: number, y: number] 

type Posicionable = {
  posicion: Coordenada
}

type Movible = {
  velocidad: Vector
  aceleracion: Vector
}

type MovibleYPosicinable = Posicionable & Movible

let obj: MovibleYPosicinable = {
  posicion: [5,5],
  velocidad: [4,4],
  aceleracion: [1,1]
}