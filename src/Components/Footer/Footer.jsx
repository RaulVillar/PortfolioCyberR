import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';


export default function Footer() {
    return (
        <div>
            <footer>
                <Grid display="flex" justifyContent="left" spacing={2} sx={{ pb: 3, mx: 8, mt: 5 }}>
                    <IconButton
                        aria-label="github.com"
                        onClick={() => window.open('https://github.com/RaulVillar')}
                        level="body3"
                        underline="none"
                        sx={{
                            color: "white",
                            fontWeight: "md",
                            "&:hover": { color: 'yellow' },
                        }}
                    ><GitHubIcon /></IconButton>
                    <IconButton
                        aria-label="Linkedin.com"
                        onClick={() => window.open('https://www.linkedin.com/in/raulvf/')}
                        level="body3"
                        underline="none"
                        sx={{
                            color: "white",
                            fontWeight: "md",
                            "&:hover": { color: 'yellow' },
                        }}
                    ><LinkedInIcon /></IconButton>
                    <IconButton
                        component={Link}
                        to="/Contact"
                        level="body3"
                        underline="none"
                        sx={{
                            color: "white",
                            fontWeight: "md",
                            "&:hover": { color: 'yellow' },
                        }}
                    ><EmailIcon /></IconButton>
                </Grid>
            </footer>
        </div>
    )
}