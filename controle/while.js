// O While é um laço utilizado quando o número de repetições é indeterminado
// Por exemplo, 'enquanto o usuário estiver digitando tal coisa, repetir'

function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max * min) + min
    return Math.floor(valor)
}

let opcao = 0 

while (opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção escolhida foi ${opcao}.`)
}

