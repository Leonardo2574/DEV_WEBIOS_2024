//while
//Enquanto 0 < 10 vou apresentar a mensagem "0 ainda é menor que 10"

var contador = 0

while(contador <= 10){
    console.log(contador + " ainda é menor que 10")
    contador++;
}

var contador = 0

do{
    debugger
    console.log(contador + " ainda é menor que 10")
    contador++;
}while(contador < 10)


var tabuada = 5

if(tabuada === 5 ){
    for(var numero = 1; numero <=10; numero++){
        console.log(`${tabuada} x ${numero} = ${tabuada / numero}`)
    }
}