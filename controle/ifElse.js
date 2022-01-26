const imprimirResultado = function(nota) {
    if(nota > 7){
        console.log(`parabens amigo vc passou com ${nota} !!`)
    } else {
        console.log(`puts amigo vc acabou reprovando com ${nota} ://`)
    }
}

imprimirResultado(7.1)
imprimirResultado(6.9)