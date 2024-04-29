import { useCallback, useEffect, useState } from "react";

export default function usePokemon() {
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [details, setDetails] = useState<any>([]);

  const URLPOKE = `https://pokeapi.co/api/v2/pokemon?limit=151`;

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

  const addUrl = useCallback(async (pokemonUrl: any) => {
    if (!pokemonUrl.length) return console.log('Zerado');
    try {
      // Mapeia cada URL de Pokémon para uma chamada fetch e retorna um array de promessas
      const reqs = pokemonUrl.map(async (pokemon: any) => {
        const response = await fetch(pokemon.url); // Faz uma solicitação assíncrona para a URL do Pokémon
        return response.json(); // Retorna uma promessa que será resolvida com os detalhes do Pokémon
      });

      // Espera que todas as promessas sejam resolvidas usando Promise.all
      const addDetails = await Promise.all(reqs);

      // Quando todas as promessas forem resolvidas com sucesso, atualiza o estado 'details' com os detalhes dos Pokémon
      setDetails(addDetails);

      // Logs dos detalhes dos Pokémon no console
      console.log(addDetails);
    } catch (error) {
      // Captura e lida com quaisquer erros que ocorram durante a busca dos detalhes dos Pokémon
      console.error("Error fetching Pokémon details:", error);
    }
  }, []);

  useEffect(() => {
    addUrl(pokemons);
  }, [addUrl, pokemons]);

  return { getPokemons, pokemons, details };
}
