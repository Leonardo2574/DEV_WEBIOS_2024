//IF
//Se todos os alunos estiverem com a blusa e o crachá então todos recebem 10
var TodosDeCracha = true
//true == true >> true
//true == false >> false
//IF >> SE // else

if(TodosDeCracha == true){
    console.log("todos recebem nota 10 em JS")
}
else{
    console.log("todos recebem nota 0 em JS")
}

var numero1 = 10
var numero2 = 5 

if(numero1 > numero2){
    console.log("numero1 e maior que o numero2")    
}

numero1 > numero2 ? console.log("numero1 é maior") : console.log("numero2 é menor")

console.clear()

let mes = "ABRIL"

if(mes == "JANEIRO"){
    console.log("é verao")
}
else if(mes == "JUNHO"){
    console.log("é outono")
}
else if(mes == "OUTUBRO"){
    console.log("é primavera")
}
else{
    console.log("é inverno")
}
