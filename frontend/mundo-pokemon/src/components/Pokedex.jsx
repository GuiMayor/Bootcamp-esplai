import { useState, useEffect } from 'react';
import Header from './Header';
import PokemonList from './PokemonList';

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
        const datos = await res.json();
        
        const listadoFinal = await Promise.all(datos.results.map(async (p) => {
          const resPoke = await fetch(p.url);
          const dataPoke = await resPoke.json();
          const resSpecies = await fetch(dataPoke.species.url);
          const dataSpecies = await resSpecies.json();

          return {
            ...dataPoke,
            evolucion_de: dataSpecies.evolves_from_species?.name || null
          };
        }));
        setPokemons(listadoFinal);
      } catch (error) {
        console.error("Error al obtener la colección:", error);
      }
    };
    obtenerDatos();
  }, []);
  const pokemonsFiltrados = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <Header busqueda={busqueda} setBusqueda={setBusqueda} />
      <PokemonList pokemons={pokemonsFiltrados} />
    </>
  );
}

export default Pokedex;