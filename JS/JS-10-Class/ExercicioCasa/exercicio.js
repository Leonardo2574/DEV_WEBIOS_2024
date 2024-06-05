class contaBancaria {
    constructor(nome, idade, salario, sexo, agencia, conta, numeroConta){
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
        this.sexo = sexo;
        this.agencia = agencia;
        this.conta = conta;
        this.numeroConta = numeroConta;
    }
    contaPoupança(){
        this.salario = this.salario *(1 - 0.015);
        return this.salario
    }
    contaCorrente(){
        this.salario = this.salario *(1 - 0.012);
        return this.salario
    }
    contaEstudante(){
        this.salario = this.salario *(1 - 0.036);
        return this.salario
    }   
    imprimirDados(){
        console.log(`nome: ${this.nome}`);
        console.log(`idade: ${this.idade}`);
        console.log(`salario: R$${this.salario.toFixed(2)}`);
        console.log(`sexo: ${this.sexo}`);
        console.log(`agencia: ${this.agencia}`);
        console.log(`conta: ${this.conta}`);
        console.log(`numeroConta: ${this.numeroConta}`);
    } 
}
let contaPoupança = new contaBancaria('Leonardo Saraiva', 23, 2500, 'M', '0001', 'Poupança', '12345-6');
let contaEstudante = new contaBancaria('Ana Santos', 20, 3000, 'F', '0003', 'Estudante', '78910-2');
let contaCorrente = new contaBancaria('joão Oliveira', 30, 4000, 'M', '0003', 'Corrente', '82346-8');

console.log('DADOS DA CONTA POUPANÇA')
contaPoupança.contaPoupança();
contaPoupança.imprimirDados();

console.log('\nDADOS DA CONTA ESTUDANTE');
contaEstudante.contaEstudante();
contaEstudante.imprimirDados();

console.log('\nDADOS DA CONTA CORRENTE');
contaCorrente.contaCorrente();
contaCorrente.imprimirDados();

