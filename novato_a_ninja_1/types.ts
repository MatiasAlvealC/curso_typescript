// Types Alias
/*
type HeroId = `${string}-${string}-${string}-${string}-${string}`
type Hero = {
  readonly id?: HeroId, // redonly, solo de lenctura
  name: string,
  age: number
  isActive?: boolean // optional properties
}
let hero: Hero = {
  name: 'thor',
  age: 1500
}

function createHero(hero: Hero): Hero {
  const  {name, age } = hero
  return {
    id: crypto.randomUUID(),
    name, age, 
    isActive: true}
}

const thor = createHero({name: 'Thor',age: 1500})
console.log(thor.isActive) //-> true

*/
// template union types

type HexadecimalColor = `#${string}`
//const color: HexadecimalColor = '0033ff' //hexadecimales
const color2: HexadecimalColor = '#0033ff' //hexadecimales


// Union type y  interseccion type
// | tipo de union, es un o
let annn: number | string // ann puede ser number o string

type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'
type HeroId = `${string}-${string}-${string}-${string}-${string}`

type HeroBasicInfo = {
  name: string,
  age: number,
}
type HeroProperties = {
  readonly id?: HeroId, // redonly, solo de lenctura
  isActive?: boolean // optional properties
  powerScale?: HeroPowerScale
}

type Hero = HeroBasicInfo & HeroProperties  // interseccion type

let hero: Hero = {
  name: 'thor',
  age: 1500
}

function createHero(input: HeroBasicInfo): Hero {
  const  {name, age } = input
  return {
    id: crypto.randomUUID(),
    name, age, 
    isActive: true}
}

const thor = createHero({name: 'Thor',age: 1500})
console.log(thor.isActive) //-> true


// Type index

type HeroProperties2 ={
  isActive: boolean,
  address: {
    planet: string,
    city: string
  }
}

const addressHero: HeroProperties2['address'] = {
  planet: 'Earth',
  city: 'Madrid'
}

const address2 = {
  planet: 'Earth',
  city: 'Madrid'
}

// typeof en TS te permite no solo saber que tipo es sino tambien 
// crear tipo de algo ya existent
type Address = typeof address2

const addressTwitch: Address = {
  planet: 'Mars',
  city: "Twitch"
}


// type from functioon return

function createAddress() {
  return {
    planet: "Tierra",
    city: "Barcelona"
  }
}

type Address2 = ReturnType<typeof createAddress> // guardamos el tipo de lo que devuelve la funcion 

