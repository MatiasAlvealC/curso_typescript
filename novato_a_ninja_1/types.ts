// Types Alias

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


// template union types

type HexadecimalColor = `#${string}`
//const color: HexadecimalColor = '0033ff' //hexadecimales
const color2: HexadecimalColor = '#0033ff' //hexadecimales
