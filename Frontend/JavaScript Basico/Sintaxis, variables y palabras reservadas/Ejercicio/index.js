/*
    Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
    - Tu nombre (string)
    - Tu edad (number)
    - ¿Eres desarrollador? (boolean)
    - Tu fecha de nacimiento (Date)
    - Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url)
*/

const lista = [
    "Alejandro", 
    27, 
    true, 
    new Date(1994, 10, 19),
    favoriteBook = {
        title: "Harry Potter y la Piedra Filosofal",
        author: "J.K. Rowling",
        date: new Date(1997, 05, 26),
        url: "https://www.amazon.es/Harry-Potter-Piedra-Filosofal-Rowling/dp/8478884459"
    }    
];

console.log(lista);
