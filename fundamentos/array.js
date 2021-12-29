// Array é uma coleção de dados que é ordenado por índices, sendo o primeiro deles o índice 0

// Defini um array com 4 índices (0, 1, 2 e 3)
const valores = [7.7, 8.8, 9.9, 4.2]

// Imprimi no terminal o valor do índice 0 (7.7) e 3 (4.2)
console.log(valores[0], valores[3])

// Imprimi no terminal o valor do índice 4, que no caso não existe, e portanto retorna undefined.
console.log(valores[4])

// Defini o valor do índice 4 para 10.
valores[4] = 10

// Imprimi todos os valores do array no terminal
console.log(valores)

// Imprimi no terminal a quantidade de índices que meu array tem utilizando .length
console.log(valores.length)

// Adicionei diversos tipos de dados ao array utilizando o .push e imprimindo no terminal
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// Imprimi o último elemento do array no terminal
console.log(valores.pop())

// Deletei o dado no índice 0, primeiro índice do array 
delete valores[0]
console.log(valores)

// Consultei o tipo do array, que no caso é um objeto
console.log(typeof valores)

