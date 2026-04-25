import PokemonCard from './PokemonCard';

function PokemonList({ pokemons }) {
  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </ul>
  );
}

export default PokemonList;