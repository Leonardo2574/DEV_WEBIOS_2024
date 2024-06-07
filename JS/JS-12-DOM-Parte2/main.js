//getElementByld
let titulo1 = document.getElementById('titulo1');

titulo1.style.color = 'red';
titulo1.innerText = 'leo';

// getElementsByNameClass

let pegaClasse = document.getElementsByClassName('getClass');

for(i = 0; i < pegaClasse.length; i++){
    pegaClasse[i].style.color = 'red'
}

console.log(pegaClasse)
console.clear()


let byname = document.getElementsByName("filho")

function funcao (byname){
    return byname[indice].style.color = 'green'
}


let byTagName = document.getElementsByTagName("p");

for(c = 0; c < byTagName.length; c++){
    byTagName[c].style.color = 'ff4500';
    byTagName[c].style.fontSize = '20px';
    byTagName[c].style.boxShadow = '5px 5px 10px black'
    byTagName[c].style.textAlign = 'center'

    if(c % 2) byTagName[c].style.backgroundColor = 'greenyellow'
    else byTagName[c].style.backgroundColor = 'yellow'
}

console.log(byTagName)

let removendo = document.getElementById('remove')
removendo.remove()

console.log(byTagName)


let recebeLista = document.getElementById('pailista')

recebeLista.style.listStyle = 'none'






