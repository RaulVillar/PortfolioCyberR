import * as React from 'react';
import BgVideo from "../../Components/BgVideo/BgVideo";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import Pdf from "../../Assets/CV/CV_RaulVF.pdf";

const imgStyle = {
  marginBottom: '0.8592910848549946vh',
  borderRadius: '5px',
  height: "28px",
  width: "104px"
}

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
          <Typography style={{ fontFamily: 'poppins', fontSize: '1.1 rem', color: "white", paddingTop: '20px' }}>My name is Raúl Villar, I was born and raised in Asturias, at a young age I started to
            develop a genuinely curious and calmed personality, always in seek of knowledge, eager to learn new things. After I finished my bachelor’s degree in history, I decided to study web
            programming. At first, I was a bit hesitant, nonetheless, I discovered how much I enjoyed working in team, learning from my colleagues, and having fun while exploring new
            paths -always applying the active learning pedagogy and agile methodology principles-. <br></br><br></br>
            I am immensely interested in finding my first job experience in the IT’s world so I can continue expanding my understanding -discovering new tools and capabilities which allow me to
            improve as a programmer-. After having completed a wide variety of projects -both individually and in team-, where I have always applied the clean code and SOLID principles, I am totally
            ready to share my wisdom and soft skills to any business which could be interested on hiring me.
          </Typography>
          <Button href={Pdf} download="CV_RaulVF" sx={{ fontFamily: 'poppins', marginTop: 2, backgroundColor: "yellow", color: "black", "&:hover": { backgroundColor: "yellow" } }} variant="contained" >Download CV</Button>
        </Grid>
      </Grid>
      <Grid justifyContent="center" container spacing={2} columns={16} sx={{ mt: 10, gap: "5vw" }}>
        <Grid xs={6}>
          <Accordion sx={{ bgcolor: 'rgba(84, 0, 0, 0.83)', borderRadius: '50px', }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" style={{ textAlign: 'center', color: "yellow" }}>Stack</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
              <img style={imgStyle} alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
              <img style={imgStyle} alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
              <img style={imgStyle} alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" />
              <img style={imgStyle} alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" />
              <img style={imgStyle} alt="Bootstrap" src="https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white" />
              <img style={imgStyle} alt="MUI" src="https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white" />
              <img style={imgStyle} alt="Jest" src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white" />
              <img style={imgStyle} alt="Java" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white" />
              <img style={imgStyle} alt="Spring Boot" src="https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white" />
              <img style={imgStyle} alt="Thymeleaf" src="https://img.shields.io/badge/Thymeleaf-%23005C0F.svg?style=for-the-badge&logo=Thymeleaf&logoColor=white" />
              <img style={imgStyle} alt="JUnit" src="https://img.shields.io/badge/Junit5-25A162?style=for-the-badge&logo=junit5&logoColor=white" />
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid xs={6}>
          <Accordion sx={{ bgcolor: 'rgba(84, 0, 0, 0.83)', borderRadius: '50px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6" style={{ textAlign: 'center', color: "yellow" }}>Tools</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
              <img style={imgStyle} alt="Visual Studio Code" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
              <img style={imgStyle} alt="IntelliJ" src="https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white" />
              <img style={imgStyle} alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
              <img style={imgStyle} alt="Jira" src="https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white" />
              <img style={imgStyle} alt="Figma" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
      <Footer />
    </div>
  )
}