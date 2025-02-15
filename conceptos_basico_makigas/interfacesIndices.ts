// interfaces con indices

// array, objects

let vector: number [] = []
vector[0]

let object = {
  displayName: "foo",
  rpDisplayName: "foo",
  id: "1"
}

let x = object['displayName']


interface Indizable {
  [index: number]: boolean
}

let ll: Indizable = {}
let k = ll[4]
