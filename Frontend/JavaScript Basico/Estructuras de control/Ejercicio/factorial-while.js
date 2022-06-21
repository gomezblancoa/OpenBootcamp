// Este archivo debe calcular el factorial de 10 utilizando un bucle while
let factorial = 1;
let number = 10;
let counter = 1;
while(counter != 10){
    factorial *= counter;
    counter++;
}

console.log(`El factorial de ${number} es: ${factorial}`);