
//
// operadores de typeScript

// boolean
// true or false

let logico = false;
let verdadero = true;

// number
// 1, 1.4, -6

let entero= 44;
let decimal = 26.55;
let hexadecimales = 0x156;
let extremadementeLargo = 9_876_543;

console.log(hexadecimales)
console.log(extremadementeLargo)

// string
let cadenas: string = "ksdjksjdakjdkaj \n odsjda";
console.log(cadenas)

// any
let cualquiera: any;
cualquiera = "una cadena";
cualquiera = false;

// null
let nada: null = null;

// undefined
let indefinido: undefined = undefined;

// void

function saluda(): void{
    console.log("HOLAAA")
}


// arrays
let dias: string[] = ["Sabado","Domingo"];
let enteritos: number[] = [1,2,3,4,5];

// tuplas
let db: [string, number, string][] = [
    ["Dani",26,"Macarrones"],
    ["Elena",25,"Pasta"],
    ["Ari",27,"Pure"]
]
let db2: [nombre:string,edad:number,
    pais: string,premium: boolean] = ["Dani",26,"España",true]



// objeto

let persona: {
    nombre: string,
    edad: number,
    pais: string,
    fecha_nac: Date
} = {
    nombre: "Pepe Perez",
    edad: 30,
    pais: "Colombia",
    fecha_nac: new Date(1990,5,14)
}
console.log(persona.fecha_nac)

let objeto: object = {
    nombre: "Pepe Perez",
    edad: 30,
    pais:"Colombia"
}
