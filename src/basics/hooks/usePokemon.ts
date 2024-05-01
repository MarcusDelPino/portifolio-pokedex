import { useEffect, useState } from "react";

export default function usePokemon() {
  const [pokemons, setPokemons] = useState<any>([]);
  const [details, setDetails] = useState<any>([]);
  const [receiveName, setReceiveName] = useState<string>("");
  const urlPoke = `https://pokeapi.co/api/v2/pokemon?limit=151`;

  const getApi = async () => {
    try {
      const getFetch = await fetch(urlPoke);
      const data = await getFetch.json();
      setPokemons(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getPokemonsDetails = async (pokemons: any) => {
    try {
      const reqs = pokemons.map(async (urlsPoke: any) => {
        const results = await fetch(urlsPoke.url);
        return results.json();
      });

      const getDetails = await Promise.all(reqs);
      // console.log(getDetails);
      return filteredPokemon(getDetails);
    } catch (error) {
      console.log(error);
    }
  };

useEffect(() => {
  const filteredPokemon = (pokeList: any) => {
    const filter = pokeList.filter((pokemon: any) =>
      pokemon.name.includes(receiveName)
    );
    setDetails(filter);

  };
  
}, []);

  

  const takeNameSearchBar = (text: string) => {
    setReceiveName(text);
  };

  // console.log(details)


  useEffect(() => {
    getPokemonsDetails(pokemons);
  }, [pokemons]);

  useEffect(() => {
    getApi();
  }, []);

  return { pokemons, details, takeNameSearchBar };
}
