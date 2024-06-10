//DOM
document.body.style.backgroundColor = "white"

window.alert("bem vindo");

window.confirm("deseja sair do jogo?")

window.prompt("está feliz?")

document.title = "Times"


var time = prompt("Qual é o nome do time?")

if(time == "são paulo"){
    alert("O time é o são paulo")
    document.body.style.backgroundColor = "Red"
    let nomeTime = document.createElement("h1")
    nomeTime.innerHTML = "são paulo - rogerio ceni"
    document.body.appendChild(nomeTime)

}else if(time == "corinthians"){
    alert("O time é o corinthians")
    document.body.style.backgroundColor = "Black"
    let nomeTime = document.createElement("h1")
    nomeTime.innerHTML = "corinthians - cassio frangueiro"
    nomeTime.style.color = "white"
    document.body.appendChild(nomeTime)

}else if(time == "palmeiras"){
    alert("O time é o palmeiras")
    document.body.style.backgroundColor = "Green"
    let nomeTime = document.createElement("h1")
    nomeTime.innerHTML = "palmeiras - Marcos"
    document.body.appendChild(nomeTime)
}


