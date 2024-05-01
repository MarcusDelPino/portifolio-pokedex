import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CardPokemons from "@/components/cardPokemon/CardPokemons";
import PesquisaPokemon from "@/components/pesquisaPokemon/PesquisaPokemon";
import usePoke from "@/basics/hooks/usePoke";


// Esse aqui é uma nova versão sem o feito em com HOOK Personalizado.
// Esse aqui é uma nova versão sem o feito em com HOOK Personalizado.
// Esse aqui é uma nova versão sem o feito em com HOOK Personalizado.
// O index  que é o que foi feito e não estou conseguindo desenvolver

export default function NovoPokeDex() {
  const { pokemons } = usePoke()
  const [ receivePokemonFilter, setReceivePokemonsFilter ] = useState<string>("");

  const filteredPokemons = (nome: any) => {
    setReceivePokemonsFilter((nome).toLowerCase())
  }

  

  return (
    <>
      <PesquisaPokemon filteredPokemon={filteredPokemons}/>
      <Box sx={{ flexGrow: 1, margin: "10px 1.5em" }}>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }}
        >
          {pokemons.filter((pokemon: any) => pokemon.name.includes(receivePokemonFilter)).map((UniquePokemon: any, ind: number) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={ind}>
              <CardPokemons pokemon={UniquePokemon}/>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
