function Header({ busqueda, setBusqueda }) {
  return (
    <header>
      <div className="search-pokemon">
        <input 
          type="text" 
          placeholder="Filtra pokemons por nombre..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)} 
        />
      </div>
    </header>
  );
}

export default Header;