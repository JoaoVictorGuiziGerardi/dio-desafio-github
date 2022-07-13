//array
/*let array = [];
let array = ['string', 1, true];
console.log(array);
*/

//em js pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']]
//console.log(array[3]);


//manipulação de um array
//forEach(), push(), pop()...
//array.forEach(function(item, index){console.log(item, index)});

/*array.push('novoFinal');
console.log(array);*/

/*array.pop();
console.log(array);*/

/*array.shift();
console.log(array);*/

/*array.unshift('novoInicio');
console.log(array);*/

//console.log(array.indexOf('string'));

/*array.splice(0, 3);
console.log(array);*/

/*var novoArray = array.slice(0, 3);
console.log(novoArray);*/

// ************************************************************************************************
//objeto
let obj = {string: 'string', number: 1, boolean: true, array: ["array"], objetoInterno: {objInterno: "objInterno"}};
console.log(obj.objetoInterno);

var string = obj.string;
console.log(string);

var arrayInterno = obj.array;
console.log(arrayInterno);

var {string, boolean, objetoInterno} = obj;
console.log(string, boolean, objetoInterno);