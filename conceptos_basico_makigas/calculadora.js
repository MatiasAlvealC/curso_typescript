// function
// [datos] ---> [sumar] ---> [datos]
function sumar(m, n) {
    var suma = m + n;
    console.log("".concat(m, " + ").concat(n, " = ").concat(suma));
    return suma;
}
sumar(4, 3);
var restar = function (m, n) {
    var resta = m - n;
    console.log("".concat(m, " + ").concat(n, " = ").concat(resta));
    return resta;
};
restar(5, 4);
var multiplicar;
multiplicar = function (m, n) { return m * n; };
console.log(multiplicar(4, 3));
