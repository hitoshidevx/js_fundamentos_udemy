let valor // nao inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 15.00

console.log(produto)

produto.preco = undefined // --> evitar atribuir undefined para zerar o valor, e sim null !!!!!!
console.log(!!produto.preco)
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)