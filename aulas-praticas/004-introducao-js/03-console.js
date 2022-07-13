function numerosPares(array){
    let numerosPares = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            numerosPares.push(array[i]);
        } else {
            console.log(`${array[i]} não é par!`);
        }
    }

    console.log('Os números pares são:',numerosPares);
}

let array = [1,4,6,7,3,5,7,8,3,2];
numerosPares(array);