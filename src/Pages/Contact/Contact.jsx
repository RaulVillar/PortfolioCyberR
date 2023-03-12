import React from "react";
import Stack from "@mui/material/Stack";
import './Contact.css'
import Input from '@mui/joy/Input';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BgVideo from "../../Components/BgVideo/BgVideo";

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
                    sx={{ color: "white", bgcolor: 'rgba(84, 0, 0, 0.83)', ml: 10, mr: 20, borderRadius: '50px', height: 700 }}
                >
                    <Stack direction="row" spacing={8} sx={{ fontSize: '1.5rem', }}>
                        <Stack sx={{ mx: 1, }} >Email:</Stack>
                        {/* <Input sx={{ width: 400, bgcolor: 'white', color: 'grey', }}
                            color="neutral"
                            size="lg"
                            variant="outlined"
                            type="email"
                            name="email"
                            placeholder="Write your e-mail here"
                        /> */}
                    </Stack>
                    <Stack direction="row" spacing={4} >
                        <Stack sx={{ mx: 1, fontSize: '1.5rem' }} >Message:</Stack>
                        <TextareaAutosize
                            rows="5"
                            name="message"
                            id="message"
                            placeholder="Write your message here"
                            required=""
                            maxRows={4}
                            style={{ width: 400, height: 200, borderRadius: '10px', fontSize: '1.2rem' }}
                        />
                    </Stack>
                    <button class='button accept-btn'>Submit</button>
                </Stack>
            </form>
            <Footer />
        </div>
    );
};
