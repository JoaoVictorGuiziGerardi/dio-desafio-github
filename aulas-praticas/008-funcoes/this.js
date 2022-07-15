function calculaIdade(anos){
    if (!anos || anos < 0) return "Parâmetro Inválido!"
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} de idade`;
} 

const pessoa1 = {
    nome: "Maria",
    idade: 30,
}

const pessoa2 = {
    nome: "Carla",
    idade: 26,
}

const animal1 = {
    nome: "Fiona",
    idade: 5,
}

const animal2 = {
    nome: "Pig",
    idade: 3,
}

console.log(calculaIdade.call(pessoa1, 14));
console.log(calculaIdade.apply(pessoa2, [2]));
console.log(calculaIdade.call(animal1));
console.log(calculaIdade.call(animal2, -5));