// Arrays

//const languages: string[] = [] // esto es si queremos que sea solo un array de string
//const languages: string[] | number[] = [] // esto es si queremos que sea solo un array de string o de number
const languages: (string | number)[] = [] // esto es si queremos que sea  un array de string o number

languages.push('JAvaScript')
languages.push("TypeScript")
languages.push(2)


// matrices y tuplas


type CellValue = 'X' | 'O' | ''
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]

const gameBoard: GameBoard = [
  ['X','O','X'],
  ['O','X','O'],
  ['X','','O']
]

// lo que devuelve un useState es una tupla