//Objetos
let pessoa = {
    corDosOlhos: "Verde",
    altura: 1.70,
    corCabelo: "preto",
    nome: "Leonardo",
    sobrenome: "Saraiva",
    hobbie: ["futebol", "LOL", "tocar violão"],
    //pode criar outro objeto
    endereço: {
        rua: "João Medeiro",
        numero: "234",
        cidade: "São Paulo",
        estado: "SP",
    }
}

console.log(pessoa)
console.log(pessoa.nome)//retornar uma propriedade
console.log(pessoa.hobbie[0])
console.log(pessoa.endereço.estado)

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
        nomeTarefa: "falar"
    }
]
console.log(tarefa)
console.log(tarefa[1])
console.log(tarefa[1].nomeTarefa)


console.clear()


let recebeJailson = JSON.stringify(pessoa);//transforma OBJETO em JSON

console.log(recebeJailson)


var JSONITO = '{ "corDosOlhos": "Verde", "altura": 1.7, "corCabelo": "preto", "nome": "Leonardo", "sobrenome": "Saraiva", "hobbie": ["futebol", "LOL", "tocar violão"], "endereço": { "rua": "João Medeiro", "numero": "234", "cidade": "São Paulo", "estado": "SP" } }' 

console.log(JSONITO)
console.log(JSON.parse(JSONITO))//transforma JSON em OBJETO