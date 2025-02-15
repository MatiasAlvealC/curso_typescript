"use strict";
// modulos
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumarTotal = sumarTotal;
function sumarTotal(productos) {
    let precio = 0;
    for (let producto of productos) {
        precio += producto.precio;
    }
    return precio;
}
