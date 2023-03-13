import BgVideo from "../../Components/BgVideo/BgVideo";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Typography from '@mui/material/Typography';

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
            </div>
            <Footer />
        </div>
    )
}