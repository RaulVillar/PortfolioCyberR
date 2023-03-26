import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';



export default function Footer() {
    return (
        <footer>
            <Grid display="flex" justifyContent="left" spacing={2} sx={{ pb: 3, mx: "3vw", mt: 5 }}>
                <IconButton
                    aria-label="Github.com"
                    onClick={() => window.open('https://github.com/RaulVillar')}
                    level="body3"
                    underline="none"
                    title="GitHub"
                    sx={{
                        color: "yellow",
                        fontWeight: "md",
                    }}
                ><GitHubIcon fontSize="large" /></IconButton>
                <IconButton
                    aria-label="Linkedin.com"
                    onClick={() => window.open('https://www.linkedin.com/in/raulvf/')}
                    level="body3"
                    underline="none"
                    title="Linkedin"
                    sx={{
                        color: "yellow",
                        fontWeight: "md",
                    }}
                ><LinkedInIcon fontSize="large" /></IconButton>
                <IconButton
                    component={Link}
                    to="/contact"
                    level="body3"
                    underline="none"
                    title="Contact"
                    sx={{
                        color: "yellow",
                        fontWeight: "md",
                    }}
                ><EmailIcon fontSize="large" /></IconButton>
            </Grid>
        </footer>
    )
}