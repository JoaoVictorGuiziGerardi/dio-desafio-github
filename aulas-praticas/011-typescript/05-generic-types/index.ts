
function adicionaApendiceLista<T>(array: any[], valor: T) { // T significa indefinido
    return array.map(item => item + valor);
}

adicionaApendiceLista([1, 2, 4], 1);
adicionaApendiceLista(['A', 'B', 'C'], 1);
adicionaApendiceLista(['A', 'B', 'C'], 'd');