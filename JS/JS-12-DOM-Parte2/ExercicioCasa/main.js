// BOTÃO 01
var botao1 = prompt("clique aqui")

if(botao1 == "clique"){
   document.body.style.Color = "#262525"
   let img = document.createElement("img")
   img.src = "https://i.pinimg.com/originals/5d/74/3a/5d743a3dafa01646e7bacb105e9464cc.jpg"
   document.body.appendChild(img)

}
// BOTÃO 02
var botao2 = prompt("Insira o nome do usuário")

if(botao2 == "leonardo"){
    let nome = document.createElement("nome")
    nome.innerHTML = "Bem vindo"
    document.body.appendChild(nome)
}
// BOTÃO 03
window.alert('Escolha um numero')
function tabuada() {
    for (let count = 1; count <= 10; count++) {
        document.write(`2 x ${count} = ${2 * count}<br />`);
    }
}
tabuada();



