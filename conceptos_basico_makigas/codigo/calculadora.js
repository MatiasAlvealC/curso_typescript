"use strict";
// function
// [datos] ---> [sumar] ---> [datos]
function sumar(m, n) {
    let suma = m + n;
    console.log(`${m} + ${n} = ${suma}`);
    return suma;
}
sumar(4, 3);
let restar = function (m, n) {
    let resta = m - n;
    console.log(`${m} + ${n} = ${resta}`);
    return resta;
};
restar(5, 4);
let multiplicar;
multiplicar = (m, n) => m * n;
console.log(multiplicar(4, 3));
