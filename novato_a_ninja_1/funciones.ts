// funciones

function saludar(name: string) {
  console.log(`Hola ${name}`)
}

saludar('Pepe')
// saludar(2) //tira error


function saludar2({name,age}: {name: string, age: number}) {
  console.log(`Hola ${name}, tienes ${age} años`)
}

saludar2({name:'Pepe', age:2})


// tambien en lo que devuelve se le pueden tipear
// asi no podemos asignar otro tipo a lo que entrega la funcion

function saludar3({name,age}: {name: string, age: number}): string {
  console.log(`Hola ${name}, tienes ${age} años`)
  return name  
}

let username: string
username = saludar3({name:'Pepe', age:2})


// arrow function
// es importante que si no devuelve nada decirle eso, es deicr, void
// pero void es mas que eso, es como decir que no importa lo que devuelva

const sayHiFromFunction = (fn: (name:string)=> void) => {
  return fn("Miguel")
}

sayHiFromFunction ((name:string) => {
  console.log(`Hola ${name}`)
})


// tipar arrow function

const sumar = (a:number, b: number):number => {
  return a + b
}

// o

const restar: (a: number, b: number) => number = (a,b) => {
  return a-b
}

// never
// las funciones tambien pueden devolver un never

// un ejemplo claro es para funciones que queremos que devuelvan errores,
// y que sabemos que nunca devolveran nada

function throwError (message: string): never {
  throw new Error(message);
}


// inferencia funciones anonimas segun el contexto
// forEach, map, etc
const avengers = ['Spidery','Hulk','Avangers']

avengers.forEach(avengers => {
  console.log(avengers.toLowerCase())
})
