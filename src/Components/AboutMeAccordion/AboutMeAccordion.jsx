import Grid from '@mui/material/Unstable_Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const imgStyle = {
  marginBottom: '0.8592910848549946vh',
  borderRadius: '5px',
  height: "28px",
  width: "104px"
}

export default function AboutMeAccordion() {
  return (
    <Grid justifyContent="center" container spacing={2} columns={16} sx={{ mt: 6, gap: "5vw" }}>
      <Grid xs={6}>
        <Accordion sx={{ bgcolor: 'rgba(84, 0, 0, 0.83)', borderRadius: '50px', }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6" style={{ color: "yellow" }}>Stack</Typography>
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
            <Typography variant="h6" style={{ color: "yellow" }}>Tools</Typography>
          </AccordionSummary>
          <AccordionDetails style={{ display: 'flex', flexDirection: 'column' }}>
            <img style={imgStyle} alt="Visual Studio Code" src="https://img.shields.io/badge/VSCode-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" />
            <img style={imgStyle} alt="IntelliJ" src="https://img.shields.io/badge/IntelliJIDEA-000000.svg?style=for-the-badge&logo=intellij-idea&logoColor=white" />
            <img style={imgStyle} alt="GitHub" src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
            <img style={imgStyle} alt="Jira" src="https://img.shields.io/badge/jira-%230A0FFF.svg?style=for-the-badge&logo=jira&logoColor=white" />
            <img style={imgStyle} alt="Figma" src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" />
            <img style={imgStyle} alt="Postman" src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" />
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  )
}