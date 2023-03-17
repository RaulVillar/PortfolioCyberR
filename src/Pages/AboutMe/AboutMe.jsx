import BgVideo from "../../Components/BgVideo/BgVideo";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  
export default function AboutMe() {
    return (
        <div>
            <BgVideo />
            <header>
                <Header />
            </header>
            <div>
            <Typography fontFamily='Alien' gutterBottom variant="h4" color="yellow" component="div" marginTop={-2} justifyContent="center" display={"flex"}>
            This section is still under construction!
          </Typography>
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box>
            </div>
            <Footer />
        </div>
    )
}