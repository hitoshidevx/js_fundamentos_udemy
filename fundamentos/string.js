const escola = "Cod3r"

// Descobrir qual é o caractér no índice 4 (r).
console.log(escola.charAt(4))

// Descobrir qual é o índice da letra C do objeto.
console.log(escola.indexOf('C'))

// Inclue todos os caractéres do objeto, exceto o que vem antes do índice 1 (C)
console.log(escola.substring(2))

// Inclue todos os caractéres do objeto no índice 2 ao 4, omitindo os demais (C, o, r)
console.log(escola.substring(2, 4))

// Concatenar strings utilizando o método .concat em vez de +
console.log('Escola '.concat(escola).concat(' !!'))

// Substituí o caractér do índice 3 (3) por um novo caractér (e)
console.log(escola.replace(3, 'e'))

console.log('Toshi,Mandinha,Layzinha'.split(','))