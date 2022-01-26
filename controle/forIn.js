const notas = [4.1, 6.4, 2.3, 9.4]

for (let i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Toshi',
    idade: 17,
    endereco: {
        logradouro: 'rua super maneira serio',
        numero: 54
    },
    sexo: 'M'
}

for(let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}