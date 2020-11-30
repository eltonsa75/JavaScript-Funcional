class Produto {

    constructor(nome, preco, desc = 0.5) {
        this.nome = nome
        this._preco = preco
        this.desc = desc
    }

    get nome(){
        return `Produto: ${this._nome}`
    }

    get preco() {
        return this._preco
    }

    set nome(novoNome) {
        this._nome = novoNome.toUpperCase()
    }

    set preco(novoPreco) {
        if(novoPreco >=0 ) {
            this._preco = novoPreco
        }
    }

    get precoFinal() {
        return this.preco * ( 1 - this.desc)
    }
}

const p1 = new Produto('Caneta', 10)
//p1.nome = 'Caneta'
p1.preco = -20
console.log(p1.nome)
console.log(p1.preco)

const p2 = new Produto('Geladeira', 10000, 0.8)
console.log(p2.preco)
console.log(p2.precoFinal)
