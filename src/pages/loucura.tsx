import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Cards from '@/components/Cards';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, margin: "0 1em" }}>
        xs = pequeno sm=medio md=grande
        
      <Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
        <Grid item xs={3} sm={3} md={3}>
        <div className='bg-red-700'>xs=4</div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
        <div className='bg-red-700'>xs=4</div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
        <div className='bg-red-700'>xs=4</div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
        <div className='bg-red-700'>xs=4</div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
        <div className='bg-red-700'>xs=4</div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
        <div className='bg-red-700'>xs=4</div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
        <div className='bg-red-700'>xs=4</div>
        </Grid>
        <Grid item xs={3} sm={3} md={3}>
        <div className='bg-red-700'>xs=4</div>
        </Grid>
      </Grid>
    </Box>
  );
}
