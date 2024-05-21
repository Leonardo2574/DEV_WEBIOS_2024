//Array
var numeros = [-2,  40,  16,  111,  33,  64 ]

console.log(numeros)
console.log(numeros[3])

var aleatorios = [true, "texto", 345, false, "texto"]

console.log(aleatorios)

console.clear

var palavras = ["Felicidade", "Humildade", "Alegria", "Respeito", "Disciplina", "Foco", "Caráter", "Ousadia"]

console.log(palavras)
console.log(palavras[3], palavras[7])

console.clear()

var bidi = [
    ['Banana', 'Maçã', 'Pêra'],//linha 0 
    ["laranja", true, 1],//linha 1
    [null, "uva",-350],//linha 2
]

//para acessar info utilizando array bidi passamos no colchetes o indice da linha e depois coluna
console.log(bidi)
console.log(bidi[1][1])


console.clear()


var mercado = [
    ["pipoca", "arroz", "feijão", "batata"],
    ["molho de tomate", "alface", "leite em pó", "detergente"],
    ["leite de coco", "candida", "maçã", "vinagre"],
    ["bolacha", "azeite", "limão", "shampoo"]
]
console.log(`${mercado[3][1]} \n ${mercado[1][1]}`)


console.clear()

let moeda = ["real", "euro", "coroa", "dolar"];

console.log(moeda)
moeda[3] = "yen"
console.log(moeda)


console.clear()


let numArray = [2, 4, 6, 8, 10]
console.log(numArray)
var mudanca = numArray.toString();
console.log(mudanca)


console.clear()

var teste1 = [5, 10, 15, 20, 25, 30]
console.log(teste1)
var mudanca2 = teste1.join("**")
console.log(mudanca2)
//transforma array em string e muda o separador dos valores


let array = [0, 2, 3, 5, 7]
console.log(array.length)

console.clear()

let utilizaPop = ['banana', 'laranja', 'maçã', 'manga']
console.log(utilizaPop)
var mudanca3 = utilizaPop.pop()
console.log(mudanca3)


var mudanca4 = utilizaPop.push('uva')
console.log(mudanca4)
console.log(utilizaPop)

console.clear()

var nomesCarros = ['audi', 'camaro', 'hb20']
console.log(nomesCarros)
var mudanca5 = nomesCarros.shift()
console.log(mudanca5)
console.log(nomesCarros)


var insereNoInicio = [true, 34, 'mano', 'socorro', 'JS']
console.log(insereNoInicio)
var mudanca6 = insereNoInicio.unshift('nice')
console.log(mudanca6)
console.log(insereNoInicio)