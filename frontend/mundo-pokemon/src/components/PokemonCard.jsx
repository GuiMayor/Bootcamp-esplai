function PokemonCard({ pokemon }) {
  return (
    <li className="card">
      <div className="card-imagen">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        <span className="card-badge">ID/{pokemon.id}</span>
      </div>

      <div className="contenido">
        <h3>{pokemon.name}</h3>
        
        <ul className="types">
          {pokemon.types.map((item, index) => (
            <li key={index}>
              <button type="button">{item.type.name}</button>
            </li>
          ))}
        </ul>
        {pokemon.evolucion_de && (
          <div className="evolution">
            <strong>Evoluciona de:</strong>
            {pokemon.evolucion_de}
          </div>
        )}
      </div>
    </li>
  );
}

export default PokemonCard;