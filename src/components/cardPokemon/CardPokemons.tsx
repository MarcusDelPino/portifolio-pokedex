import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import Types from "../Types"
import { Roboto } from '@next/font/google'

interface CardPokemonsProps {
  pokemon: any;
}

const roboto = Roboto({
  weight: ["900"],
  subsets: ["latin"],
});

export default function CardPokemons({ pokemon }: CardPokemonsProps) {
  //   console.log();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="40"
          width="40"
          image={pokemon.sprites.front_default}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            className= {`flex justify-center items-center ${roboto.className}`}
          >
            {pokemon.name.toUpperCase()}
          </Typography>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-center"
            sx={{ padding: 1 }}
          >
            <Types
              typeOne={pokemon.types[0]?.type.name}
              typeTwo={pokemon.types[1]?.type.name}
            />
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
