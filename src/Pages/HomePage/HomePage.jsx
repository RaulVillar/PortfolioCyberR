import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import React from 'react'
import { useState, useEffect } from 'react';
import HomeCards from "../../Components/HomeCard/HomeCard";
import CallAxios from '../../Services/CallAxios';
import Grid from '@mui/material/Grid';
import BgVideo from "../../Components/BgVideo/BgVideo";


export default function HomePage() {

  const [projects, setProjects] = useState([]);

  async function callGetProjects() {
    await CallAxios().getProjects()
      .then(res => {
        setProjects(res.data);
      })
  }
  useEffect(() => { callGetProjects() }, []);

  return (
    <>
    <BgVideo />
      <div>
        <nav>
          <Header />
        </nav>
          <Grid justifyContent="center" container spacing={2} columns={16}>
            {projects.map(item => (
              <Grid sx={{ mt: 4 }} key={item.id}>
                <HomeCards
                  Image={item.image}
                  Title={item.name}
                  technologies={item.technologies}
                  description={item.description}
                  github={item.github}
                />
              </Grid>
            ))}
          </Grid>
        <Footer/>
      </div>
    </>
  )
}