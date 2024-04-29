import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import usePokemon from "@/basics/hooks/usePokemon";
import Grid from "@mui/material/Grid";

export default function Cards() {
  const { details } = usePokemon();
  console.log(details);
  return (
    <>
      {details.map((card: any, ind: number) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={card.id}>
          <Card sx={{ maxWidth: 450 }}>
            <CardMedia
              component="img"
              alt="green alface"
              height="140"
              image={card.sprites.front_default}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" sx={{ textAlign: 'center' }} component="div">
                {card.name.toUpperCase()}
              </Typography>
              {/* <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography> */}
            </CardContent>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
              sx={{ padding: 1 }}
            >
              <div>{card.types[0]!.type.name} </div>
              <div>
                {card.types[1] && (
                  <div>
                    <span className="ml-1"> / </span>
                    {card.types[1]!.type.name}
                  </div>
                )}
              </div>
            </Grid>
          </Card>
        </Grid>
      ))}
    </>
  );
}
