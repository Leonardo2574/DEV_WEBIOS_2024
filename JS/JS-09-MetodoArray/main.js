// METODO forEach
let frutas = ['maçã', 'banana', 'manga', 'pera', 'uva', 'goiabada']

frutas.forEach(retornaInfo);
function retornaInfo(nomeFruta, Indice){
    console.log(`nomeFruta: ${nomeFruta}`)
    console.log(`Indice: ${Indice}`)
}

//Arrow Function
frutas.forEach(teste = (nomeFruta, Indice) => {
    console.log(`nomeFruta: ${nomeFruta}`)
    console.log(`Indice: ${Indice}`)
})


frutas.forEach((teste, Indice) => console.log(teste, Indice))
//ELE VAI RETORNAR APENAS O NOME E NÃO VAI RETORNAR O INDICE


console.clear()


let tarefa = [
  {
    id: 1,
    isPronta: true,
    nomeTarefa: "pular",
  },
  {
    id: 2,
    isPronta: false,
    nomeTarefa: "correr",
  },
  {
    id: 3,
    isPronta: true,
    nomeTarefa: "falar",
  },
]


//METODO MAP
let numeros = [4, 9, 16, 25]
let novoArray  = numeros.map(Math.sqrt)

console.log("Array antigo" + numeros)
console.log("novo array" + novoArray)


console.clear()

let mapText = tarefa .map((retornaText) => {
  console.log(retornaText.nomeTarefa)
})

//METODO FILTER
let numeros2 = [3, 13, 24, 36, 47, 50, 60, 78, 89]
let resultado = numeros2.filter(retornaFiltro)
function retornaFiltro(num){
  return num > 30
}
console.log(resultado)


let tarefaFiltro = tarefa.map((resultadoFiltro) => {
  return resultadoFiltro.isPronta === false
})
console.log(tarefaFiltro)

console.clear()

//METODO FIND
let sapatos = [
  { marca: "nike", quantidade: 3 },
  { marca: "Adidas", quantidade: 5 },
  { marca: "Puma", quantidade: 7 },
];
sapatos.find((retornaFind) => {
  console.log(retornaFind.marca === "Puma")  
})

