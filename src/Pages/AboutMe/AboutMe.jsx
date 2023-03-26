import * as React from 'react';
import BgVideo from "../../Components/BgVideo/BgVideo";
import Footer from "../../Components/Footer/Footer";
import AboutMeText from '../../Components/AboutMeText/AboutMeText';
import AboutMeAccordion from '../../Components/AboutMeAccordion/AboutMeAccordion';


export default function AboutMe() {

  return (
    <>
      <BgVideo />
      <AboutMeText />
      <AboutMeAccordion />
      <Footer />
    </>
  )
}