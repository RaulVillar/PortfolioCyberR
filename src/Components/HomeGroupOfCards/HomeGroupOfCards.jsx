import React from 'react'
import { useState, useEffect } from 'react';
import HomeCards from "../../Components/HomeCard/HomeCard";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CallAxios from '../../Services/CallAxios';



export default function HomeGroupOfCards() {

    const [projects, setProjects] = useState([]);

    async function callGetProjects() {
        await CallAxios().getProjects()
            .then(res => {
                setProjects(res.data);
            })
    }
    useEffect(() => { callGetProjects() }, []);

    return (
        <div>
            <Typography variant="h4" sx={{ color: "yellow", textAlign: 'center', marginTop: 3.2 }} >Projects</Typography >
            <Grid justifyContent="center" container>
                {projects.map(item => (
                    <Grid sx={{ mt: 6 }} key={item.id}>
                        <HomeCards
                            mainImg={item.mainImg}
                            secondaryImg={item.secondaryImg}
                            tertiaryImg={item.tertiaryImg}
                            Title={item.name}
                            technologies={item.technologies}
                            description={item.description}
                            github={item.github}
                        />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
