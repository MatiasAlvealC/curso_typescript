// function
// [datos] ---> [sumar] ---> [datos]

function sumar(
  m:number,
  n:number
): number {
  let suma = m + n;
  console.log(`${m} + ${n} = ${suma}`)
  return suma
}

sumar(4, 3)

let restar = function (m:number, n:number):number {
  let resta = m - n;
  console.log(`${m} + ${n} = ${resta}`)
  return resta
}

restar(5,4)

let multiplicar: (m:number, n:number) => number 
multiplicar = (m,n) => m*n

console.log(multiplicar(4,3))