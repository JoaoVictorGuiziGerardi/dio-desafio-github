const alunos = [
    {
        nome: "João",
        nota: 8,
        turma: '1B',
    },
    {
        nome: "Mário",
        nota: 4,
        turma: '1B',
    },
    {
        nome: "Sofia",
        nota: 9,
        turma: '1B',
    },
    {
        nome: "Paulo",
        nota: 6,
        turma: '1B',
    }
]

const mediaBoa = (media) => media >= 6 ? true : false

function alunosAprovados(array){
    let arrayAux = [];

    array.forEach(function(aluno){
        // Obj Destructuring
        const {nota, nome} = aluno;

        if (mediaBoa(nota))
            arrayAux.push(nome);
    })

    return arrayAux
}

console.log(alunosAprovados(alunos))