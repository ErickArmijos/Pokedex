import { useState, useEffect } from "react";

const fetchPokemonData = async (len) => {
  const promiseArr = [];
  const limit = 20; // Número de Pokémon a cargar por cada solicitud
  for (let i = len; i < len + limit; i++) {
    promiseArr.push(
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => res.json())
    );
  }
  const resolvedData = await Promise.all(promiseArr);
  return resolvedData.map((item) => ({
    id: item.id,
    name: item.name,
    img: item.sprites.other.dream_world.front_default,
    types: item.types,
    height: item.height,
    weight: item.weight,
    stats: item.stats,
    abilities:item.abilities,
  }));
};

const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const resp = await fetchPokemonData(1);
      setPokemons(resp);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setLoading(true);
        fetchPokemonData(pokemons.length + 1).then((newPokemons) => {
          if (newPokemons.length === 0) {
            setMessage("No more Pokémon available.");
          } else {
            setPokemons((prevPokemons) => [...prevPokemons, ...newPokemons]);
          }
          setLoading(false);
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pokemons]);

  return { pokemons, message, isLoading };
};

export default usePokemons;
