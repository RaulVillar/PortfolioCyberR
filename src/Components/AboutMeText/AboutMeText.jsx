import Button from '@mui/material/Button';
import Pdf from "../../Assets/CV/CV_RaulVF.pdf";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export default function AboutMeText() {
  return (
    <Grid justifyContent="center" container >
      <Grid sx={{ bgcolor: 'rgba(84, 0, 0, 0.83)', borderRadius: '50px', p: 4 }} xs={10}>
        <Typography variant="h4" style={{ textAlign: 'center', color: "yellow" }}>About me</Typography >
        <Typography style={{ fontFamily: 'poppins', fontSize: '1.1 rem', color: "white", paddingTop: '20px' }}>My name is Raúl Villar, I was born and raised in Asturias, at a young age I started to
          develop a genuinely curious and calmed personality, always in seek of knowledge, eager to learn new things. After I finished my bachelor’s degree in history, I decided to study web
          programming. At first, I was a bit hesitant, nonetheless, I discovered how much I enjoyed working in team, learning from my colleagues, and having fun while exploring new
          paths -always applying the active learning pedagogy and agile methodology principles-. <br></br><br></br>
          I am immensely interested in finding my first job experience in the IT’s world so I can continue expanding my understanding -discovering new tools and capabilities which allow me to
          improve as a programmer-. After having completed a wide variety of projects -both individually and in team-, where I have always applied the clean code and SOLID principles, I am totally
          ready to share my wisdom and soft skills to any business which could be interested on hiring me. Check out my curriculum:
        </Typography>
        <Button href={Pdf} download="CV_RaulVF" sx={{ fontFamily: 'poppins', marginTop: 2, transition: 'transform 0.2s ease-out', backgroundColor: "yellow", color: "black", "&:hover": { backgroundColor: "yellow", transform: 'translateY(-4px)' } }} variant="contained" >Download CV</Button>
      </Grid>
    </Grid>
  )
}