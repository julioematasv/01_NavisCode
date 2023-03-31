let listadoPokemon = [
    {
        nombre: "Bulbasaur",
        tipo: "planta",
        poder: "veneno"
    },
    {
        nombre: "Ivysaur",
        tipo: "planta",
        poder: "veneno"
    },
    {
        nombre: "Charmander",
        tipo: "fuego",
        poder: "ninguno"
    },
    {
        nombre: "Charizard",
        tipo: "fuego",
        poder: "volar"
    }
];


for (let key in listadoPokemon){
    if (listadoPokemon[key].tipo == "fuego"){
        console.log(listadoPokemon[key].nombre + " Este es un Pokemon de Fuego");
        document.write(listadoPokemon[key].nombre + " Este es un Pokemon de Fuego <br>");
    }
}
