let nombre = "Julio";
let edad = 57;
let mayorDeEdad = true;
let direccion = {
    calle: "Artesa segre 1",
    codPostal: 28035,
    Ciudad: "Madrid"
    };
let coloresFavoritos = ["Naranja", "Cian", "Azul"];
let lenguajesFavoritos = ["PHP", "Java", "Python", "C#",];
let mejorLenguaje = lenguajesFavoritos[0];
let peorLenguaje = lenguajesFavoritos[2];

console.log("Mi nombre es " + nombre);
console.log("Mi edad es " + edad);
console.log("¿Eres mayor de edad? " + mayorDeEdad);
console.log("La calle donde vivo es " + direccion.calle);
console.log("Mi color favorito es " + coloresFavoritos[0]);
console.log("Los lenguajes que conozco son " + lenguajesFavoritos);
console.log("Mi lenguaje favorito es " + mejorLenguaje);
console.log("Mi lenguaje menos favorito es " + peorLenguaje);

document.write("Mi nombre es " + nombre);
document.write("<br>");
document.write("Mi edad es " + edad);
document.write("<br>");
document.write("¿Eres mayor de edad? " + mayorDeEdad);
document.write("<br>");
document.write("La calle donde vivo es " + direccion.calle);
document.write("<br>");
document.write("Mi color favorito es " + coloresFavoritos[0]);
document.write("<br>");
document.write("Los lenguajes que conozco son " + lenguajesFavoritos);
document.write("<br>");
document.write("Mi lenguaje favorito es " + mejorLenguaje);
document.write("<br>");
document.write("Mi lenguaje menos favorito es " + peorLenguaje);