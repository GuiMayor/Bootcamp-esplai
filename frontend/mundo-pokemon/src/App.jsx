import { useState, useEffect } from 'react';
import PokemonCard from './components/PokemonCard';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=-20");
        const datos = await res.json();

        const listadoFinal = await Promise.all(datos.results.map(async (p) => {
          const resPoke = await fetch(p.url);
          const dataPoke = await resPoke.json();

          // Obtener la evolución
          const resSpecies = await fetch(dataPoke.species.url);
          const dataSpecies = await resSpecies.json();

          return {
            ...dataPoke,
            evolucion_de: dataSpecies.evolves_from_species?.name || null
          };
        }));

        setPokemons(listadoFinal);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    obtenerDatos();
  }, []);

  return (
    <div className="wrapper">
      <header>
        <div className="search-pokemon">
          <input type="text" placeholder="Filtra pokemons por nombre..." />
        </div>
      </header>

      <ul className="pokemon-list">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
}

export default App;