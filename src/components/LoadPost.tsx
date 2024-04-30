import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Cards from "./Cards";
export default function LoadPosts() {
  
  return (
    <Box sx={{ flexGrow: 1, margin: "0 1.5em" }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1 ,sm: 1, md: 2, lg: 2, xl: 2}}>
        <Cards />
      </Grid>
    </Box>
  );
}
