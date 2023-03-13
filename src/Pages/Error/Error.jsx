import BgVideo from "../../Components/BgVideo/BgVideo";
import Typography from '@mui/material/Typography';
import Header from "../../Components/Header/Header";

export default function Error() {
    return (
        <div>
            <BgVideo />
            <nav>
                <Header />
            </nav>
            <Typography fontFamily='Alien' gutterBottom variant="h3" color="yellow" component="div" marginTop={30} justifyContent="center" display={"flex"}>
                Woops, looks like something went wrong!
            </Typography>
        </div>
    )
}