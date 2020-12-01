const path = require('path')
const fn = require('./funcoes')

const caminho = path.join (__dirname, '..', 'dados', 'legendas')

const simbolos = [
   '.', '?', '-', '"', '♪',
   '_', '<i>', '</i>', '\r', '[', ']',
   '(', ')'
]

function agruparPalavras() {
   
}

 fn.lerDiretorio(caminho)
      .then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt')) 
      .then(arquivosSRT => fn.lerArquivos(arquivosSRT))
      .then(fn.mesclarElementos)
      .then(fn.separarTextoPor('\n'))
      .then(fn.removerElementosSeVazio)
      .then(fn.removerElementosSeIncluir('-->'))
      .then(fn.removerElementosSeApenasNumero)
      .then(fn.removerSimbolos(simbolos))
      .then(fn.mesclarElementos)     
      .then(fn.separarTextoPor(' '))
      .then(fn.removerElementosSeVazio)
      .then(console.log)
