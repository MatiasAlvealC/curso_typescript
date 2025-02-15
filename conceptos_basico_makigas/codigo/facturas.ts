import {Producto, sumarTotal} from "./almacen"
import IVA from "./impuestos"

function procesarPedido( p: Producto[]) {
  console.log("Procesando...")
  console.log(`El IVA es ${IVA(10.99)}`)
}