import React from "react";
import Stack from "@mui/material/Stack";
import './Contact.css'
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BgVideo from "../../Components/BgVideo/BgVideo";
import Typography from '@mui/material/Typography';

export default function Contact() {
    return (
        <div>
            <BgVideo />
            <div>
                <Header />
            </div>
            <form
                class='mi-formGen'
                id="mi-form"
                action="https://formspree.io/f/mrgvlkdq"
                method="POST"
            >
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                    sx={{ color: "white", bgcolor: 'rgba(84, 0, 0, 0.83)', ml: "5vw", mr: "5vw", borderRadius: '50px', height: 700 }}
                >
                    <Typography variant="h4" sx={{ color: "yellow", mt:-5 }} >Contact</Typography >
                    <Stack direction="column" spacing={4} sx={{ fontSize: '1.5rem' }}>
                        <Stack sx={{ fontSize: '1.2rem', mx: 1, mt:5 }} >Email:</Stack>
                        <TextField sx={{ bgcolor: 'white', borderRadius: "10px" }}
                            size="lg"
                            variant="outlined"
                            type="email"
                            name="email"
                            placeholder="Write your e-mail here"
                        />
                    </Stack>
                    <Stack direction="column" spacing={4} >
                        <Stack sx={{ fontSize: '1.2rem', mx: 1 }} >Message:</Stack>
                        <TextareaAutosize
                            minRows={5}
                            name="message"
                            id="message"
                            placeholder="Write your message here"
                            required=""
                            maxRows={4}
                            style={{ fontFamily: 'poppins', width: 380, height: 200, borderRadius: '10px', fontSize: '1.2rem' }}
                        />
                    </Stack>
                    <button class='button accept-btn'>Submit</button>
                </Stack>
            </form>
            <Footer />
        </div>
    );
};
