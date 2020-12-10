
const letrasAninhadas = [
    ['O','L','a'],
    [' '],
    ['m', 'u', 'n', 'd', 'o'],
    ['!', '!', '!']
]

const letras = letrasAninhadas.flat(Infinity)

const resultado = letras
    .map(l => [l, ','])
    .reduce((a, b) => a + b)

console.log(resultado)
