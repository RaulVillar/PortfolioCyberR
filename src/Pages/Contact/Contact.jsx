import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import BgVideo from "../../Components/BgVideo/BgVideo";
import ContactForm from "../../Components/ContactForm/ContactForm";


export default function Contact() {
    return (
        <div>
            <BgVideo />
            <Header />
            <ContactForm />
            <Footer />
        </div>
    );
};
