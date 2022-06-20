var variable;
let variableLet;

const constante = "Soy una constante";

// VAR
var a = 1;
a = 4;
console.log(a);

// CONST
console.log(constante)
// constante = "a" --> Esto da error. La constante no puede cambiar

// LET
let b = 3;
console.log(b);
b = 5;
console.log(b);

// Diferencia entre "var" y "let"

var variable = "Variable VAR";
for (let i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable";
}
console.log(variable);

let variableLet1 = "Variable VAR";
for (let i = 0; i < 3; i++) {
    let variableLet1 = "Soy la segunda variable";
}
console.log(variableLet1);

console.log(typeof a);