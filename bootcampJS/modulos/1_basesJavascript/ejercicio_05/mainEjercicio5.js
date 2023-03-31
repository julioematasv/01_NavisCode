let listaPokemon = ["Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon"];

document.write("Este es el primer Pokemon: " + listaPokemon[0] +"<br>");
document.write("Este es el segundo Pokemon: " + listaPokemon[1] +"<br>");
document.write("Este es el tercer Pokemon: " + listaPokemon[2] +"<br>");
console.log("Este es el listado de Pokemons: " + listaPokemon);
document.write("<br><br>Este es el listado de Pokemons: " + listaPokemon);

document.write("<br><br><br> Listado por un bucle for in:<br>");
for(let pokemon in listaPokemon){
    console.log(listaPokemon[pokemon]);

    document.write(listaPokemon[pokemon] + "<br>")
}