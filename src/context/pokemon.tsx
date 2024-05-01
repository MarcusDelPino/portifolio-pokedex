import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect } from 'react';

interface PokemonContextType {
    pokemon: Array<string>;
    details: Array<any>;
    getPokemon: () => void;
    addUrl: (param: any) => void;
    changePokemons: (param: any) => void;
    filterPokemon: (param: any) => void;
}

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

interface PokemonProviderProps {
    children: ReactNode;
}

export function PokemonProvider({ children }: PokemonProviderProps) {
    const [pokemon, setPokemon] = useState<Array<string>>([]);
    const [details, setDetails] = useState<Array<any>>([]);

    const URL_POKE = `https://pokeapi.co/api/v2/pokemon?limit=5`;

    const getPokemon = useCallback(async () => {
        try {
            const addPokemons = await fetch(URL_POKE);
            const data = await addPokemons.json();
            setPokemon(data.results);
            addUrl(data.results)
        } catch (error) {
            console.error(error);
        }
    }, []);

    const addUrl = async (pokemonUrl: any) => {
        try {
            const reqs = pokemonUrl.map(async (reqUrl: any) => {
                const response = await fetch(reqUrl.url);
                return response.json();
            });

            const addDetails = await Promise.all(reqs);
            setDetails(addDetails);
        } catch (err) {
            console.error(err);
        }
    };

    function changePokemons(newList: any) {
        setPokemon(newList);
    };

    function filterPokemon(newList: any) {
        addUrl(newList);
    };

    return (
        <PokemonContext.Provider
            value={{
                pokemon,
                details,
                getPokemon,
                addUrl,
                changePokemons,
                filterPokemon
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
}

export function useContextPokemon(): PokemonContextType {
    const context = useContext(PokemonContext);

    if (!context) {
        throw new Error('usePokemon deve ser usado dentro de um PokemonProvider');
    }

    return context;
}