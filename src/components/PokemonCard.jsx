/* eslint-disable react/prop-types */
import "./PokemonCard.css";
const PokemonCard = ({ id, name, img, types,showPokemon}) => {
  const primaryType = types[0].type.name.toLowerCase();

  return (
    <div className={`card card-${primaryType}`} onClick={showPokemon}>
      <div className="card__header">
        <h5>#{id}</h5>
      </div>
      <div className="card__body">
        <img
          src={img}
          className="card__img"
          alt={name}
        />
        <div className="card-title"><h3 className="titleName">{name}</h3></div>
        <h4>Type/s:</h4>
        <div className="card__type">
          
          {types.map((type, index) => (
            <div className="type__pokemon" key={index}>
              <span>{type.type.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
