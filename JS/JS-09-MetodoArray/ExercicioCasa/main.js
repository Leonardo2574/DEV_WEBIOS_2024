let array = [17, 43, 8, 4, 97, 56, 29]

array.forEach(retornaInfo)
function retornaInfo(impar, par){
    console.log(`impar: ${impar}`)
    console.log(`par: ${par}`)
}

//PARTE 2 DO EXERCICIO

let numeros = [17, 43, 8, 4, 97, 56, 29, 3,  75,  34, 88, 82, 61]
let resultado = numeros.filter(retornaFiltro)
function retornaFiltro(num){
    return num >20
}
console.log(resultado)




   
