const pokemons = [
  {
    id: 1,
    nombre: "Bulbasaur",
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    tipos: ["grass", "poison"],
    evolucion: null,
  },
  {
    id: 2,
    nombre: "Ivysaur",
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    tipos: ["grass", "poison"],
    evolucion: "Bulbasaur",
  },
  {
    id: 3,
    nombre: "Venusaur",
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    tipos: ["grass", "poison"],
    evolucion: "Ivysaur",
  },
  {
    id: 4,
    nombre: "Charmander",
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    tipos: ["fire"],
    evolucion: null,
  },
  {
    id: 5,
    nombre: "Charmeleon",
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    tipos: ["fire"],
    evolucion: "Charmander",
  },
  {
    id: 6,
    nombre: "Charizard",
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    tipos: ["fire", "flying"],
    evolucion: "Charmeleon",
  },
  {
    id: 7,
    nombre: "Squirtle",
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    tipos: ["water"],
    evolucion: null,
  },
  {
    id: 8,
    nombre: "Wartortle",
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    tipos: ["water"],
    evolucion: "Squirtle",
  },
  {
    id: 9,
    nombre: "Blastoise",
    imagen:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    tipos: ["water"],
    evolucion: "Wartortle",
  },
];
function crearTarjeta(pokemon) {
  const article = document.createElement("article");
  article.classList.add("card");

  // crear el contenedor de la imagen y el badge (ID)
  const contenedorImagen = document.createElement("div");
  contenedorImagen.classList.add("card-imagen");

  const img = document.createElement("img");
  img.setAttribute("src", pokemon.sprites.front_default);
  img.setAttribute("alt", pokemon.name);

  const badge = document.createElement("span");
  badge.classList.add("card-badge");
  badge.textContent = `ID/${pokemon.id}`;
  contenedorImagen.append(img, badge);

  // Contenedor de información
  const contenido = document.createElement("div");
  contenido.classList.add("contenido");

  const nombre = document.createElement("h3");
  nombre.textContent = pokemon.name;

  const listaTipos = document.createElement("ul");
  listaTipos.classList.add("types");

  pokemon.types.forEach((item) => {
    const li = document.createElement("li");
    const boton = document.createElement("button");
    boton.setAttribute("type", "button");
    boton.textContent = item.type.name;
    li.append(boton);
    listaTipos.append(li);
  });

  contenido.append(nombre, listaTipos);
  article.append(contenedorImagen, contenido);

  return article;
}

function renderizarListado(coleccion) {
  const contenedor = document.querySelector(".pokemon-list");
  contenedor.textContent = '';

  const fragmento = document.createDocumentFragment();
  coleccion.forEach(pokemon => {
    const tarjeta = crearTarjeta(pokemon);
    const li = document.createElement('li');
    li.append(tarjeta);
    fragmento.append(li);
  });
  contenedor.append(fragmento);
}

async function obtenerPokemons() {
  try {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=-1");
    const datos = await respuesta.json();
    const promesasDetalles = datos.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      return res.json();
    });

    const listadoFinal = await Promise.all(promesasDetalles);
    renderizarListado(listadoFinal);

  } catch (error) {
    console.error("Hubo un error al consultar la PokéAPI:", error);
  }
}

obtenerPokemons();