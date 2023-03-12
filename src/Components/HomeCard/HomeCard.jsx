import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Favorite from "@mui/icons-material/Favorite";
import Box from "@mui/joy/Box";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ActionAreaCard(props) {
 
  return (
    <Card spacing={4} elevation={3} sx={{ bgcolor: 'rgba(84, 0, 0, 0.83)', Height: 600, maxWidth: 400, mx: 2, borderRadius: '5%' }}>
      <CardActionArea>
        <CardMedia sx={{ mx: 1, width: 320, p: 4, borderRadius: '50px' }}
          component="img"
          width='30'
          height='200'
          image={props.Image}
          alt="green iguana"
        />
        <CardContent sx={{ mx: 4 }}>
          <Typography fontFamily='poppins' gutterBottom variant="h5" color="white" component="div" marginTop={-2}>
            {props.Title}
          </Typography>
          <Typography fontFamily='poppins' variant="h6" color="yellow">
            {props.technologies}
          </Typography>
          <Typography fontFamily='poppins' variant="body1" color="white" height="15vh">
            {props.description}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", gap: 1.5, mt: "auto", mx: 3 }}>
        <IconButton
          href="#dribbble-shot"
          level="body3"
          underline="none"
          sx={{
            color: "white",
            fontWeight: "md",
            ml: "auto",
            "&:hover": { color: 'yellow' },
          }}
        ><Favorite /></IconButton>
        <IconButton
          href="#dribbble-shot"
          level="body3"
          underline="none"
          sx={{
            color: "white",
            fontWeight: "md",
            "&:hover": { color: 'yellow' },
          }}
        ><GitHubIcon /></IconButton>
      </Box>
      </CardActionArea>
      
    </Card>
  );
}