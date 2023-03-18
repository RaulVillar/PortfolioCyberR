import * as React from 'react';
import BgVideo from "../../Components/BgVideo/BgVideo";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';



export default function AboutMe() {


  return (

    <div>
      <BgVideo />
      <header>
        <Header />
      </header>
      <Grid justifyContent="center" container >
        <Grid sx={{ bgcolor: 'rgba(84, 0, 0, 0.83)', borderRadius: '50px', p: 4 }} xs={10}>
          <Typography variant="h4" style={{ textAlign: 'center', color: "yellow" }}>About me</Typography >
          <Typography style={{ fontFamily: 'poppins', fontSize: '1.1 rem', color: "white", paddingTop: '20px' }}>My name is Raúl Villar, I was born and raised in Asturias, I started at a young age to
            develop a genuinely curious and calmed personality, always in seek of knowledge, eager to learn new things. After I finished my bachelor’s degree in history, I decided to study web
            programming. In the first moment, I was a bit hesitant, nonetheless, I discovered how much I enjoyed working in team, learning from my colleagues, and having fun while exploring new
            paths -always applying the active learning pedagogy and agile methodology principles-. <br></br><br></br>
            I am immensely interested in finding my first job experience in the IT’s world so I can continue expanding my understanding -discovering new tools and capabilities which allow me to
            improve as a programmer-. After having completed a wide variety of projects -both individually and in team-, where I have always applied the clean code and SOLID principles, I am totally
            ready to share my wisdom and soft skills to any business which could be interested on hiring me.
          </Typography>
        </Grid>
      </Grid>
      <Grid justifyContent="center" container spacing={2} columns={12} sx={{ mt: 10, gap: 10 }}>
        <Grid sx={{ bgcolor: 'rgba(84, 0, 0, 0.83)', borderRadius: '50px', }} xs={3}>
          <Typography variant="h6" style={{ textAlign: 'center', color: "yellow" }}>Stack</Typography>
          <Typography style={{ listStyle: 'none', textAlign: 'center', fontFamily: 'poppins', fontSize: '1.1 rem', color: "white", paddingTop: '10px' }}>
            <li style={{ fontFamily: 'poppins' }}>HTML5</li>
            <li style={{ fontFamily: 'poppins' }}>CSS3</li>
            <li style={{ fontFamily: 'poppins' }}>JavaScript</li>
            <li style={{ fontFamily: 'poppins' }}>React (Axios, Jest, MUI, Bootstrap)</li>
            <li style={{ fontFamily: 'poppins' }}>Java (Spring Boot, Thymeleaf, JUnit)</li>
          </Typography>
        </Grid>
        <Grid sx={{ bgcolor: 'rgba(84, 0, 0, 0.83)', borderRadius: '50px' }} xs={3}>
          <Typography variant="h6" style={{ textAlign: 'center', color: "yellow" }}>Tools</Typography>
          <Typography style={{ listStyle: 'none', textAlign: 'center', fontFamily: 'poppins', fontSize: '1.1 rem', color: "white", paddingTop: '10px' }}>
            <li style={{ fontFamily: 'poppins' }}>VSC</li>
            <li style={{ fontFamily: 'poppins' }}>IntelliJ</li>
            <li style={{ fontFamily: 'poppins' }}>GitHub</li>
            <li style={{ fontFamily: 'poppins' }}>Jira</li>
            <li style={{ fontFamily: 'poppins' }}>Figma</li>
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}