"use strict";
// Union de tipos
let valor = { uno: true, dos: true };
let valor2 = { tres: false };
function operar(o) {
    if (o.tipo == "suma") {
        return o.sumando1 + o.sumando2;
    }
    else if (o.tipo == "multiplicar") {
        return o.operando1 * o.operando2;
    }
}
let obj = {
    posicion: [5, 5],
    velocidad: [4, 4],
    aceleracion: [1, 1]
};
