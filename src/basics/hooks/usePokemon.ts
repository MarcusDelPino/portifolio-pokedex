import { useCallback, useEffect, useState } from "react";

export default function usePokemon() {
  const [pokemons, setPokemons] = useState<any>([]);
  const [details, setDetails] = useState<any>([]);

  const URLPOKE = `https://pokeapi.co/api/v2/pokemon?limit=5`;

  const getPokemons = useCallback(async () => {
    try {
      const addPokemons = await fetch(URLPOKE);
      const data = await addPokemons.json();
      setPokemons(data.results);
    } catch (error) {
      console.error(error);
    }
  }, [URLPOKE]);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);

  const addUrl = async (pokemonUrl: any) => {
    try {
      const reqs = pokemonUrl.map(async (reqUrl: any) => {
        const response = await fetch(reqUrl.url);
        return response.json();
      });

      const addDetails = await Promise.all(reqs);
      setDetails(addDetails);
      console.log(pokemons);
    } catch (err) {
      console.error(err);
    }
  };
  
  useEffect(() => {
    addUrl(pokemons);
  }, [pokemons]);

  function changePokemons (newList: any) {
    setPokemons(newList);
    console.log(pokemons);
    
    console.log(details);
  };

  return {
    getPokemons,
    pokemons,
    details,
    setDetails,
    setPokemons,
    changePokemons,
  };
}
