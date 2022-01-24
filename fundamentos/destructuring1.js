// novo recurso do ES2015

const pessoa = {
    nome : 'Ana',
    idade : 14,
    endereco : {
        logradouro : 'rua bem divertida',
        numero : 12
    }
}

// tirei os atributos 'nome' e 'idade' do objeto 'pessoa' que criei acima.
const { nome, idade } = pessoa
console.log(nome, idade)

// tirei os atributos e coloquei cada um em uma variavel com sua inicial.
const { nome: n, idade: i } = pessoa
console.log(n, i)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) 


