"use strict";
// casteo
// el casteo es para pasar variables de un tipo a otro
function procesar(n) {
    if (n.lados == 4) {
        let cuadrado = n;
        cuadrado.lado;
    }
    else if (n.lados == 3) {
        let triangulo = n;
        triangulo.altura;
    }
}
// tambien es posible hacer check que sirven para comprobar tipos
// instanceof
// no funciona con interfaces
function esUnCuadrado(x) {
    return x.lados && x.lados == 4 && x.pintar;
}
function esUnTriangulo(x) {
    return x.base;
}
