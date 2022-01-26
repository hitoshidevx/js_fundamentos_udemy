// O Switch é usado em laços que são 'casos'.
// Ou seja, quando a condição é 'caso a nota de fulano seja 9, fazer tal coisa'.
// É importante utilizar o break para que quando entrar em algum case, ele sair sem repetiro os cases seguintes.

const imprimirResultado = function(nota) {
    switch(Math.floor(nota)) {
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break
        case 8: case 7:
            console.log('Estrelhinha dourada')
            break
        case 6: case 5: case 4:
            console.log('Ursinho infeliz')
            break
        case 3: case 2: case 1: case 0:
            console.log('poxa... da pra melhorar ne anjo? :(')
            break
        default:
            console.log('Nota inválida.')
    }
}

imprimirResultado(3)