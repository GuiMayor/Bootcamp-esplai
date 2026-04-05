<<<<<<< HEAD
const pokemon = [
=======
const pokemons = [
>>>>>>> b5146575df216586873ed935fab7de0651a1f7d5
    {
        id: 1,
        nombre: "Bulbasaur",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        tipos: ["grass", "poison"],
<<<<<<< HEAD
        evolucion: null,
=======
        evolucionDe: null,
>>>>>>> b5146575df216586873ed935fab7de0651a1f7d5
    },
    {
        id: 2,
        nombre: "Ivysaur",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        tipos: ["grass", "poison"],
<<<<<<< HEAD
        evolucion: "Bulbasaur",
=======
        evolucionDe: "Bulbasaur",
>>>>>>> b5146575df216586873ed935fab7de0651a1f7d5
    },
    {
        id: 3,
        nombre: "Venusaur",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        tipos: ["grass", "poison"],
<<<<<<< HEAD
        evolucion: "Ivysaur",
=======
        evolucionDe: "Ivysaur",
>>>>>>> b5146575df216586873ed935fab7de0651a1f7d5
    },
    {
        id: 4,
        nombre: "Charmander",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        tipos: ["fire"],
<<<<<<< HEAD
        evolucion: null,
=======
        evolucionDe: null,
>>>>>>> b5146575df216586873ed935fab7de0651a1f7d5
    },
    {
        id: 5,
        nombre: "Charmeleon",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        tipos: ["fire"],
<<<<<<< HEAD
        evolucion: "Charmander",
=======
        evolucionDe: "Charmander",
>>>>>>> b5146575df216586873ed935fab7de0651a1f7d5
    },
    {
        id: 6,
        nombre: "Charizard",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        tipos: ["fire", "flying"],
<<<<<<< HEAD
        evolucion: "Charmeleon",
=======
        evolucionDe: "Charmeleon",
>>>>>>> b5146575df216586873ed935fab7de0651a1f7d5
    },
    {
        id: 7,
        nombre: "Squirtle",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        tipos: ["water"],
<<<<<<< HEAD
        evolucion: null,
=======
        evolucionDe: null,
>>>>>>> b5146575df216586873ed935fab7de0651a1f7d5
    },
    {
        id: 8,
        nombre: "Wartortle",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        tipos: ["water"],
<<<<<<< HEAD
        evolucion: "Squirtle",
=======
        evolucionDe: "Squirtle",
>>>>>>> b5146575df216586873ed935fab7de0651a1f7d5
    },
    {
        id: 9,
        nombre: "Blastoise",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        tipos: ["water"],
<<<<<<< HEAD
        evolucion: "Wartortle",
=======
        evolucionDe: "Wartortle",
>>>>>>> b5146575df216586873ed935fab7de0651a1f7d5
    }
];
const article = document.createElement('article');
article.classList.add('card');
<<<<<<< HEAD
// crear el contenedor de la imagen y el badge (ID)
=======
// imagen y el badge (ID)
>>>>>>> b5146575df216586873ed935fab7de0651a1f7d5
const contenedorImagen = document.createElement('div');
contenedorImagen.classList.add('card-imagen');

const img = document.createElement('img');
img.setAttribute('src', pokemon.imagen);
img.setAttribute('alt', pokemon.nombre);

const badge = document.createElement('span');
badge.classList.add('card-badge');
badge.textContent = `ID/${pokemon.id}`;

<<<<<<< HEAD
contenedorImagen.append(img, badge);

// Nombre y tipo del pokemon
const contenido = document.createElement('div');
contenido.classList.add('contenido');

const nombre = document.createElement('h3');
nombre.textContent = pokemon.nombre;

contenido.append(nombre, listaTipos);

const listaTipos = document.createElement('ul');
listaTipos.classList.add('types');

// Recorrer los tipos y crear
pokemon.tipos.forEach(tipo => {
    const li = document.createElement('li');
    const boton = document.createElement('button');
    boton.setAttribute('type', 'button');
    boton.textContent = tipo;
    li.append(boton);
    listaTipos.append(li);
});
contenido.append(nombre, listaTipos);
// evolución
if (pokemon.evolucion) {
    const bloqueEvolucion = document.createElement('p');
    bloqueEvolucion.classList.add('evolution');

    const etiquetaEvo = document.createElement('strong');
    etiquetaEvo.textContent = "Evoluciona de:";

    const textoEvo = document.createTextNode(` ${pokemon.evolucion}`);

    bloqueEvolucion.append(etiquetaEvo, textoEvo);
    contenido.append(bloqueEvolucion);
}

// tarjeta completa
article.append(contenedorImagen, contenido);

    return article;
=======
contenedorImagen.append(img, badge);
>>>>>>> b5146575df216586873ed935fab7de0651a1f7d5
