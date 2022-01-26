let contador = 1 
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

// For é utilizado quando sabemos previamente quantas vezes precisamos que o laço se repita
// Primeiro declaramos a variável (let = i)
// Depois impomos a condição para que o laço repita (i <= 10)
// E no fim, acrescentamos uma unidade para a nossa variável até que o loop acabe (i++)
for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 5.3, 9.1]
for(let i = 0; i < notas.length; i++) {
    console.log(`notas = ${notas[i]}`)
}