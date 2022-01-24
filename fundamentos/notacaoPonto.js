const obj1 = {}

obj1.nome = 'Bola'

function Obj(nome) {
    this.nome = nome
}

const obj3 = new Obj('Cadeira')
const obj4 = new Obj('Mesa')

console.log(obj3)
console.log(obj4)