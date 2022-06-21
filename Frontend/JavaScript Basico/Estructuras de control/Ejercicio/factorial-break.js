// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let factorial = 1;
let number = 10;
counter = 1;
while(true){
    factorial *= counter;
    counter++;
    if(counter === number){
        break;
    }
}

console.log(`El factorial de ${number} es: ${factorial}`);