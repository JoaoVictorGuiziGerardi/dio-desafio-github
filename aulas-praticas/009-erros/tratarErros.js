function func(array, num){
    try{
        if(!array && !num)
            throw new ReferenceError("Parâmetros não enviados");
        if(typeof array !== 'object')
            throw new TypeError("O primeiro parâmetro precisa ser um array");
        if(typeof num !== 'number')
            throw new TypeError("O segundo parâmetro precisa ser um número");

        if (num === array.length)
            return array;
        else
            throw new RangeError("Número não condiz com o tamanho do array");
    } catch (e){
        if(e instanceof ReferenceError){
            console.log("Erro do Tipo Reference Error");
        } else if (e instanceof TypeError){
            console.log("Erro do Tipo Type Error");
        } else if (e instanceof RangeError){
            console.log("Erro do Tipo Range Error");
        } else {
            console.log("Erro inesperado: " + e.name);
        }

        console.log(e.message);
    }
}
/*
console.log(func());
console.log(func(2, 2));
console.log(func([1, 3, 4, 5], 'a'));
console.log(func([1, 3, 4, 5], 2));
*/
console.log(func([1, 3, 4, 5], 4));
