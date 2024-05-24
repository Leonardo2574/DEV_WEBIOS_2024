//FUNÇÃO
function soma(num1, num2, num3) { //PARAMETROS
     var num1
     var num2
    return num1 + num2 + num3;
}
console.log(soma(2, 3, 2))
//console.log(soma) 

//crie uma funcao que receba 4 valores e retorne apenas a media desses valores

console.clear()

function media(med1, med2, med3, med4) {
    
    return(med1 + med2 + med3 + med4) / 4;  
}
console.log(media(2, 4, 6, 8));

console.clear()


const media2 = (n1, n2, n3, n4) => {
    return(n1 + n2 + n3 + n4) / 4;
}
console.log(media2(5,5,5,5));


console.clear()


function onloadTela() {
    alert("sua tela está carregada Bem Vindo")
    
}
console.log("recarregou a tela");



const clique = () => {
    alerta("Bem Vindo voce clicou em mim")
}
console.log("voce clicou em um botão");