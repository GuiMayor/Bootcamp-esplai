const pokemons = [
    {
        id: 1,
        nombre: "Bulbasaur",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        tipos: ["grass", "poison"],
        evolucionDe: null,
    },
    {
        id: 2,
        nombre: "Ivysaur",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
        tipos: ["grass", "poison"],
        evolucionDe: "Bulbasaur",
    },
    {
        id: 3,
        nombre: "Venusaur",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
        tipos: ["grass", "poison"],
        evolucionDe: "Ivysaur",
    },
    {
        id: 4,
        nombre: "Charmander",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        tipos: ["fire"],
        evolucionDe: null,
    },
    {
        id: 5,
        nombre: "Charmeleon",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
        tipos: ["fire"],
        evolucionDe: "Charmander",
    },
    {
        id: 6,
        nombre: "Charizard",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
        tipos: ["fire", "flying"],
        evolucionDe: "Charmeleon",
    },
    {
        id: 7,
        nombre: "Squirtle",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        tipos: ["water"],
        evolucionDe: null,
    },
    {
        id: 8,
        nombre: "Wartortle",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
        tipos: ["water"],
        evolucionDe: "Squirtle",
    },
    {
        id: 9,
        nombre: "Blastoise",
        imagen: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
        tipos: ["water"],
        evolucionDe: "Wartortle",
    }
];
const article = document.createElement('article');
article.classList.add('card');
// imagen y el badge (ID)
const contenedorImagen = document.createElement('div');
contenedorImagen.classList.add('card-imagen');

const img = document.createElement('img');
img.setAttribute('src', pokemon.imagen);
img.setAttribute('alt', pokemon.nombre);

const badge = document.createElement('span');
badge.classList.add('card-badge');
badge.textContent = `ID/${pokemon.id}`;

contenedorImagen.append(img, badge);