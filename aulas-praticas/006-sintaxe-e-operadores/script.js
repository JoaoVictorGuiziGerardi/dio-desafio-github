function verificacao(n1, n2){
    if(!n1 || !n2) return "Defina dois números diferentes de zero!";

    let frase = '';
    if (n1 === n2) frase += `Os números ${n1} e ${n2} são iguais.`;
    else frase += `Os números ${n1} e ${n2} não são iguais.`;

    let soma = n1 + n2;
    frase += ` Sua soma é ${soma}, que é`;
    if (soma > 10) frase += ' maior que 10';
    else if (soma < 10) frase += ' menor que 10';

    if(soma > 20) frase += ' e maior que 20.';
    else if(soma < 20) frase += ' e menor que 20.';
    else frase += '.';

    return frase;
}

console.log(verificacao(20, 2));
console.log(verificacao(15, 2));
console.log(verificacao(22, -2));
console.log(verificacao(8, 2));
console.log(verificacao(4, 3));
console.log(verificacao(4, 0));
console.log(verificacao(4));