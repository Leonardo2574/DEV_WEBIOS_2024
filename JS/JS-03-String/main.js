var string = "Os alunos estão";
var string2 = " reprovados";
var string3 = " ou aprovados?";

// + > soma ou concatenação
console.log(string + string2 + string3);

console.log(`${string + string2 + string3}`)
//concatenar string e fazer ao mesmo tempo contas matematicas

console.clear()

//criar uma variavel que vai receber o seguinte texto Avanti Palestra
var texto1 = "Avanti Palestra"

console.log(texto1.charAt(0));
console.log(texto1[5])

console.clear()

//tamanho string
var texto2 = "ios"
var texto3 = "Está chovendo hamburguer"

console.log(`na variavel texto2 tem ${texto2.length} caracteres`)
console.log(`na variavel texto3 tem ${texto3.length} caracteres`)

console.clear()

var texto4 = "aqui esta em minusculo"
var texto5 = "AQUI ESTA EM MAIUSCULO"

console.log(`minusculo: ${texto4.toLowerCase()}`)
console.log(`maiusculo: ${texto5.toUpperCase()}`)

console.clear()

var str = "Mozilla"

console.log(str.substring(1,4))

var texto6 = "olha a pipoca"

console.log(texto6.replace(`pipoca`, `carreta furacao`));

console.clear()

var texto7 = "    olha a carreta   "

console.log(texto7.trim())