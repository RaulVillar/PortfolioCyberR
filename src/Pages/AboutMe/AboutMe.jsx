import * as React from 'react';
import BgVideo from "../../Components/BgVideo/BgVideo";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import AboutMeText from '../../Components/AboutMeText/AboutMeText';
import AboutMeAccordion from '../../Components/AboutMeAccordion/AboutMeAccordion';


export default function AboutMe() {

  return (
    <>
      <BgVideo />
      <Header />
      <AboutMeText />
      <AboutMeAccordion />
      <Footer />
    </>
  )
}