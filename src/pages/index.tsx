import ChurchIcon from '@mui/icons-material/Church';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import SearchAppBar from '@/components/AppBar';
import LoadPosts from '@/components/LoadPost';



export default function Home() {
  
  // console.log()
  
  return (
    <div >
      <SearchAppBar />
      <ChurchIcon />
      <CatchingPokemonIcon sx={{color: 'red'}}/>
      <LoadPosts />
    </div>
  );
}
