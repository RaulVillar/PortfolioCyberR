import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';

export default function Footer() {
    return (
        <div>
            <footer>
                <Grid display="flex" justifyContent="left" spacing={2} sx={{ mx: 8 }}>
                    <p style={{ color: "white" }}>All rights reserved by Raúl Villar, 2023 ©</p>
                    <IconButton
                    href="https://github.com/RaulVillar"
                    level="body3"
                    underline="none"
                    sx={{
                        color: "white",
                        fontWeight: "md",
                        "&:hover": { color: 'rgba(61, 29, 94, 1)' },
                    }}
                ><GitHubIcon /></IconButton>
                <IconButton
                    href="https://www.linkedin.com/in/raulvf/"
                    level="body3"
                    underline="none"
                    sx={{
                        color: "white",
                        fontWeight: "md",
                        "&:hover": { color: 'rgba(61, 29, 94, 1)' },
                    }}
                ><LinkedInIcon /></IconButton>
                <IconButton
                    href="/Form"
                    level="body3"
                    underline="none"
                    sx={{
                        color: "white",
                        fontWeight: "md",
                        "&:hover": { color: 'rgba(61, 29, 94, 1)' },
                    }}
                ><EmailIcon /></IconButton>
                </Grid>
            </footer>
        </div>
    )
}