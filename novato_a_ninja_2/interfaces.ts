// interfaces

interface Heroe {
  id: string,
  name: string,
  age: number
}

const hero: Heroe = {
  id: '1',
  name: 'Spiderman',
  age: 30
}

interface Producto {
  id: number,
  nombre: string,
  precio: number,
  quantity: number,
}

interface CarritoDeCompras {
  totalPrice: number,
  productos: Producto[]
}

interface Zapatilla extends Producto {
  talla: number
}

const carrito: CarritoDeCompras ={
  totalPrice: 100,
  productos: [
    {
      id:1,
      nombre: 'producto 1',
      precio: 100,
      quantity:150
    }
  ]
}

// a diferencia de los types, las interface si se pueden repetir
interface CarritoOps {
  add: (producto: Producto) => void,
  remove (id: number): void
}
interface carritoOps {
  clear(): void
}

// se suelen usar las interfaces mas en objetos o clases

