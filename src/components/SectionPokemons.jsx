import { useState, useEffect } from 'react';
import "./SectionPokemons.css";
import PokemonCard from "./PokemonCard";
import usePokemons from "../hooks/usePokemons";
import ModalPokemon from './ModalPokemon';

const SectionPokemons = () => {
  const { pokemons, message, isLoading } = usePokemons();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [showModal,setShowModal] = useState({show:false,pokemon:{}})
  const viewPokemon = (pokemon)=>{setShowModal({show:true,pokemon})
console.log(pokemon)}
  const notViewPokemon = ()=>{setShowModal({show:false,pokemon:{}})}


  useEffect(() => {
    const fetchData = async () => {
      const timeoutId = setTimeout(() => {
        setIsFirstLoad(false);
      }, 100);
      return () => clearTimeout(timeoutId);
    };
    fetchData();
  }, []);
  return (
    <>
   
    <div className="containerPokemons">
    <ModalPokemon {...showModal} closeModal={notViewPokemon} />
      <div className="pokemonsContainer">
        {isFirstLoad ? (
          <div className="initial-loading-container">
            <div className="initial-loading-animation"></div>
            <p>Loading Pokémons...</p>
          </div>
        ) : (
          <div className="pokemonsPage">
            {pokemons.map((pokemon) => (
              <PokemonCard key={pokemon.id} {...pokemon} showPokemon={()=>viewPokemon(pokemon)}/>
            ))}
          </div>
        )}
        {isLoading && !isFirstLoad && (
          <div className="loading-container">
            <div className="loading-circle"></div>
          </div>
        )}
      </div>
      {!isLoading && message && <div className="message">{message}</div>}
    </div>
    </>
  );
};

export default SectionPokemons;
