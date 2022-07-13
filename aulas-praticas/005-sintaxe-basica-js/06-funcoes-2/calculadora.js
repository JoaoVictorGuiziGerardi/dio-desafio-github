function calculadora() {
    const operacao = prompt('Escolha uma operação:\n1 - Soma(+)\n2 - Subtração(-)\n3 - Multiplicação(*)\n4 - Divisão Real(/)\n5 - Divisão Interira (%)\n6 - Potenciação (**)')

    if (Number.parseInt(operacao) > 6 || Number.parseInt(operacao) < 1){
        alert("Digite uma operação válida!")
        calculadora();
    }

    let n1 = prompt('Insira o primeiro valor:');
    let n2 = prompt('Insira o segundo valor:');

    n1 = Number.parseInt(n1);
    n2 = Number.parseInt(n2);

    function soma() {
        window.alert(`${n1} + ${n2} = ${n1 + n2}`);
    }

    function subtracao() {
        alert(`${n1} - ${n2} = ${n1 - n2}`);
    }

    function multiplicacao() {
        alert(`${n1} * ${n2} = ${n1 * n2}`);
    }

    function divisaoReal() {
        alert(`${n1} / ${n2} = ${n1 / n2}`);
    }

    function divisaoInteira() {
        alert(`${n1} % ${n2} = ${n1 % n2}`);
    }

    function potenciacao() {
        alert(`${n1} ^ ${n2} = ${n1 ** n2}`);
    }

    function novaOperacao(){
        let opcao = prompt('Deseja fazer outra operação?\n1 - Sim\n2 - Não');
        if (opcao == 1){
            calculadora();
        } else if (opcao == 2) {
            alert("Até logo!");
        } else {
            alert("Digite uma opção válida!");
            novaOperacao();
        }
    }
    
    switch(Number.parseInt(operacao)){
        case 1: soma(); break;
        case 2: subtracao(); break;
        case 3: multiplicacao(); break;
        case 4: divisaoReal(); break;
        case 5: divisaoInteira(); break;
        case 6: potenciacao(); break;
    }

    novaOperacao();
}

calculadora();