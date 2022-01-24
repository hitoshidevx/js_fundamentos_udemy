// É interessante utilizar o try and catch ao criar uma função para uma resolução mais eficiente.

function tratarErroLancar(erro) {
    throw new Error('...')
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroLancar(e)
    }
}

const obj = { nome: 'Gabriel' }
imprimirNomeGritado(obj)