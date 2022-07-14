function ehPalindromo(frase){
    if (typeof(frase) != 'string')
        return "Parâmetro Inválido!"
    
    frase = frase.toUpperCase();
    
    // Tirar os espaços
    let fraseSplit = frase.split(" ");

    // Esvazia string para receber só as letras
    frase = '';
    fraseSplit.forEach(function(item){
        frase += item;
    })

    // Faz a verificação
    for (let i = 0; i < frase.length / 2; i++){
        if (frase[i] !== frase[frase.length - 1 - i])
            return false;
    }
    
    return true;
}

console.log(ehPalindromo("O rato roeu a roupa do rei de roma"));
console.log(ehPalindromo("A cara rajada da jararaca"))
console.log(ehPalindromo("arara"))
console.log(ehPalindromo(23))
console.log(ehPalindromo())