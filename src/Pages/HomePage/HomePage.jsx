import Header from "../../Components/Header/Header"
import Footer from "../../Components/Footer/Footer"
import React from 'react'
import { useState, useEffect } from 'react';
import HomeCards from "../../Components/HomeCard/HomeCard";
import CallAxios from '../../Services/CallAxios';
import Grid from '@mui/material/Grid';



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
      <div>
        <div>
          <Header />
        </div>
          <Grid display="flex" justifyContent="center" spacing={2} sx={{ mx: 8, mt: 6}}>
            <h1 style={{ color: "white" }}>Check out my latest projects</h1>
          </Grid>
          <Grid container spacing={2} columns={16} sx={{ mx: 5 }}>
            {projects.map(item => (
              <Grid sx={{ mt: 4 }} key={item.id}>
                <HomeCards
                  Image={item.image}
                  Title={item.name}
                  technologies={item.technologies}
                  description={item.description}
                />
              </Grid>
            ))}
          </Grid>
        <Footer/>
      </div>
    </>
  )
}