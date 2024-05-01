import ChurchIcon from "@mui/icons-material/Church";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import SearchAppBar from "@/components/AppBar";
import LoadPosts from "@/components/LoadPost";
import { useState } from "react";
import usePokemon from "@/basics/hooks/usePokemon";

export default function Home() {

  const {details} = usePokemon()

  return (
    <div>
      <SearchAppBar />
      {/* <ChurchIcon />
      <CatchingPokemonIcon sx={{color: 'red'}}/> */}
      <div className="mt-3">
        {/* <LoadPosts /> */}
      </div>
    </div>
  );
}
