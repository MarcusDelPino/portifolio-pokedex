import ChurchIcon from "@mui/icons-material/Church";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import SearchAppBar from "@/components/AppBar";
import LoadPosts from "@/components/LoadPost";
import { useState } from "react";
import usePokemon from "@/basics/hooks/usePokemon";

export default function Home() {
  const [pokemons, setPokemons] = useState<any>([]);
  const { details } = usePokemon();
  
  
  const searchName = (text: string) => {
    
    const res = details.filter((det: any) => det.name.includes(text));

    return setPokemons(res);
  };

 
  return (
    <div>
      <SearchAppBar takeNameSearchBar={searchName} />
      {/* <ChurchIcon />
      <CatchingPokemonIcon sx={{color: 'red'}}/> */}
      <div className="mt-3">
        <LoadPosts pokemons={pokemons.length > 0 ? pokemons : details}/>
      </div>
    </div>
  );
}
