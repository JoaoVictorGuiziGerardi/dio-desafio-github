function substituiPares(array){
    if(!array.length || !array) return -1

    for(let i = 0; i < array.length; i++){
        if (array[i] === 0){
            console.log(`${array[i]} já é 0...`)
        } else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }

    return array;
}

console.log(substituiPares([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(substituiPares([]));
console.log(substituiPares([0, 0, 0]));
console.log(substituiPares([1, 22, 3, 'ko']));
console.log(substituiPares([4, 5, 6]))