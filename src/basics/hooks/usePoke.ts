import { useEffect, useState } from "react";

export default function usePoke() {
    const [pokemons, setPokemons] = useState<any>([]);
  const URLPOKE = `https://pokeapi.co/api/v2/pokemon/`;


    const getApiData = async () => {
        const endpoint = [];
        try {
          for (let index = 1; index <= 151; index++) {
            endpoint.push(`${URLPOKE}${index}`);
            // console.log(endpoint);
          }
    
          const reqs = endpoint.map(async (url: string) => {
            const data = await fetch(url);
            return data.json();
          });
          const getPoke = await Promise.all(reqs);
          setPokemons(getPoke);
        //   console.log(getPoke);
        } catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getApiData();
      }, []);

    return {
        pokemons
    }
}
