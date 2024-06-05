// CLASS
// Objetos é composta por duas coisas // PROPRIEDADES =Caracteristicas e Metodos // FUNCIONALIDADES
class carro {
    constructor(nome, ano) { // Molde de um objeto
        this.nome = nome;
        // O que está antes do sinal de igual é uma propriedade que com o THIS 
        // sabemos que pertemce a classe e o que está depois do sinal de igual
        // sabemos que é um parametro 
        this.ano = ano;
    }

    anoCarro(anoAtual) {
        return anoAtual - this.ano;

    }
}
// criar uma nova copia da classe =
let carro1 = new carro("KWID", 2012);
let carro2 = new carro("MOBi", 2015); 

console.log(carro)
console.log(carro1)
console.log(carro2)

console.clear()

// Exemplo de utilizar Date,
let anoAtual = new Date();
let recebeAno = anoAtual.getFullYear();
console.log(anoAtual)
console.log(recebeAno)

console.log(carro1.anoCarro(recebeAno)) // ano = 2012
