let numeros = [1, 1, 25, 33, 39, 39, 13, 41, 26, 19 ];
let subtotal = numeros.reduce((previous, current) => current += previous);
let total = subtotal / numeros.length;

console.log(total);