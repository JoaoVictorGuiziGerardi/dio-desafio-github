class ContaBancaria{
    constructor (agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(quantia){
        this.saldo = quantia;
    }

    sacar(quantia){
        if(quantia <= this._saldo){
            this._saldo -= quantia
        } else {
            return "Saldo Insuficiente!"
        }

        return `Novo Saldo: R\$${this._saldo}`
    }

    depositar(quantia){
        this._saldo += quantia;
        return `Novo Saldo: R\$${this._saldo}`
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartao) {
        super(agencia, numero);
        this._cartao = cartao;
        this.tipo = 'Conta Corrente'
    }

    get cartao(){
        return this.cartao;
    }

    set cartao(cartao){
        this.cartao = cartao;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Conta Poupanca';
    }

}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Conta Universitária';
    }

    sacar(quantia){
        if (quantia < 500){
            super.sacar(quantia);
        } else {
            console.log("Quantia inválida para saque neste tipo de conta");
        }
    }
}

const cc = new ContaCorrente('itau', 123, 'black');
console.log(cc.saldo);
console.log(cc.depositar(1000));
console.log(cc.sacar(250));
console.log(cc.sacar(800));

const cp = new ContaPoupanca('nubank', 234);

const cuni = new ContaUniversitaria('inter', 543);
console.log(cuni.depositar(600));
console.log(cuni.sacar(550));