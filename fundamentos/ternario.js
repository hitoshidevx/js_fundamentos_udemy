// Criei uma constante com um unico atributo (nota)
// Criei uma expressão relacional que é como se fosse uma condição (nota =>7)
// Se essa condição for VERDADEIRA (?) =  'Aprovado'
// Se essa condição for FALSA (:) = 'Reprovado'

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado '

// Aprovado
console.log(resultado(7.1))
// Reprovado
console.log(resultado(6.9))