// hibridos entre funciones y tipos

interface Comparator {
    (first: string, second: string): number
}

function sort(c: Comparator) {
    let out = c("first", "second")
}