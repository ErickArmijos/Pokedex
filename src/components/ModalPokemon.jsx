/* eslint-disable react/prop-types */
import "./ModalPokemon.css";

const ModalPokemon = ({ show, pokemon, closeModal }) => {
  const pokemonTypes = pokemon.types;
  return (
    <div className="modalPokemonContainer" onClick={closeModal} style={{ display: show ? 'grid' : 'none' }}>
      <div className="modalBody" onClick={(e) => e.stopPropagation()}>
        <div className="imageModal">
          <img src={pokemon.img} alt={pokemon.name} className="imageDetailModal" />
          <h3>Type</h3>
          <section className="containerType">
            {pokemonTypes?.map((type, index) => (
              <div className="typeModalPokemon" key={index}>
                <span>{type.type.name}</span>
              </div>
            ))}
          </section>
        </div>
        <div className="dataModal">
          <h2 className="nameModel">{pokemon.name} #{pokemon.id}</h2>
          <h3>Abilities</h3>
          {pokemon.abilities?.map((ability, index) => (
            <div className="abilitieModalPokemon" key={index}>
              <span>{ability.ability.name}</span>
            </div>
          ))}

          <h3>Stats</h3>
          <div className="statsGrid">
            {pokemon.stats?.map((stat, index) => (
              <div className="statSquare" key={index}>
                <span className="statName">{stat.stat.name}</span>
                <span className="statValue">{stat.base_stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalPokemon;
