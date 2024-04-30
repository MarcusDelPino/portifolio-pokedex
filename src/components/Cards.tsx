import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import usePokemon from "@/basics/hooks/usePokemon";
import Grid from "@mui/material/Grid";
import { Roboto, Lato } from "@next/font/google";
import Image from "next/image";
import Types from "./Types";

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});

const lato = Lato({
  weight: ["900"],
  subsets: ["latin"],
});

export default function Cards() {
  const { details } = usePokemon();

  return (
    <>
    <div>

      {details.map((card:any) =>   <div key={card.id}>{card.name}</div> )}
    </div>
      {details.map((card: any, ind: number) => (
        <Grid item xs={6} sm={4} md={3} lg={2} key={card.id}>
          <Card sx={{ maxWidth: 450 }}>
            <CardMedia
              component="img"
              alt="green alface"
              height="100"
              width="100"
              image={card.sprites.front_default}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                sx={{ textAlign: "center" }}
                component="div"
                className={lato.className}
              >
                {card.name.toUpperCase()}
              </Typography>
            </CardContent>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
              sx={{ padding: 1 }}
            >
              <Types typeOne={card.types[0]!.type.name} typeTwo={card.types[1]?.type.name}/>
            </Grid>
          </Card>
        </Grid>
      ))}
    </>
  );
}
