// implementaciones de interfaces

interface Shape {
  readonly sides: number,
  area(): number,
  permeter(): number,
}

function process(s: Shape) {
  // do something
  console.log({ area: s.area()})
}

class Rectangule implements Shape{
  sides:4
  constructor(
    readonly width:number, 
    readonly height:number
  ) {

  }
  area(): number {
    return this.width * this.height
  }

  permeter(): number {
      return 2 * this.width + 2 * this.height
  }
}

let r = new Rectangule(5,6)
process(r)