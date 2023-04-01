import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Box from "@mui/joy/Box";
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "75%",
  maxWidth: 400,
  maxHeight: "90%",
  color: 'white',
  overflowY: "auto",
  margin: "0 auto",
  bgcolor: 'rgba(84, 0, 0, 0.83)',
  borderRadius: "10px",
  border: '2px solid yellow',
  boxShadow: 24,
  padding: "2rem",
};
export default function ActionAreaCard(props) {

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{
      bgcolor: 'rgba(84, 0, 0, 0.83)',
      Height: 600,
      maxWidth: 400,
      mx: 7,
      borderRadius: '5%',
      boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
      transition: 'box-shadow 0.3s ease-in-out',
      "&:hover": {
        boxShadow: '0px 12px 20px 0px rgba(0,0,0,0.6)',
      }
    }}>
      <CardActionArea>
        <CardMedia onClick={() => setIsOpen(true)} sx={{ width: 320, p: 4, borderRadius: '50px' }}
          component="img"
          height='200'
          image={props.mainImg}
          alt="green iguana"
        />
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          plugins={[Zoom]}
          closeOnBackdropClick={() => setIsOpen(false)}
          slides={[
            {
              src: props.mainImg,
              alt: "image 1",
              width: 1600,
              height: 800,
            },
            {
              src: props.secondaryImg,
              alt: "image 2",
              width: 1600,
              height: 800,
            },
            {
              src: props.tertiaryImg,
              alt: "image 3",
              width: 1600,
              height: 800,
            }
          ]}
        />
        <CardContent sx={{ mx: 3 }}>
          <Typography fontFamily='ethno' gutterBottom variant="h6" color="white" component="div" marginTop={-2}>
            {props.Title}
          </Typography>
        </CardContent>
        <Button variant="outlined" sx={{ mx: 4, fontSize: '13px', transition: 'transform 0.2s ease-out', borderWidth: '1px', color: "yellow", borderColor: "yellow", '&:hover': { borderColor: 'yellow', transform: 'translateY(-4px)' } }} onClick={handleOpen}>Show More</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography fontFamily='poppins' gutterBottom variant="h4" color="white" component="div" marginTop={-2}>
              {props.Title}
            </Typography>
            <Typography fontFamily='poppins' variant="h6" color="yellow">
              {"Stack: " + props.technologies}
            </Typography>
            <Typography fontFamily='poppins' variant="body1" color="white" height="10vh">
              {props.description}
            </Typography>
          </Box>
        </Modal>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton
            href={props.github}
            level="body3"
            underline="none"
            title="GitHub"
            sx={{
              color: 'white',
              fontWeight: 'md',
              '&:hover': { color: 'yellow' },
              mr: 3
            }}
          >
            <GitHubIcon /></IconButton>
        </Box>
      </CardActionArea>
    </Card>
  );
}