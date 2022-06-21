// Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
let factorial = 1;
let number = 10;
for (let i = 1; i < number; i++) {
    factorial *= i;
}

console.log(`El factorial de ${number} es: ${factorial}`);