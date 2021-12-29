const nome = 'Toshi'
const contatenacao = 'Olá ' + nome + '!'

const template = `
    Olá
    ${nome}!
`

console.log(contatenacao, template)

const up = texto => texto.toUpperCase();
console.log(`Ei.. ${up('cuidado!!!')}`)