import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae illo inventore officia unde doloremque perferendis sed numquam vero expedita! Similique?',
        img: 'https://i.ibb.co/Jz5rcFx/fluoride.png' 
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae illo inventore officia unde doloremque perferendis sed numquam vero expedita! Similique?',
        img: 'https://i.ibb.co/mG7T2w2/cavity.png' 
    },
    {
        name: 'Teath Whitening',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae illo inventore officia unde doloremque perferendis sed numquam vero expedita! Similique?',
        img: 'https://i.ibb.co/K588G09/whitening.png' 
    }
]



const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}> 
            <Container>
            <Typography sx={{ fontWeight: 500, m: 2, color: 'primary.main'  }} variant="h6" component="div">
                Our Services
                </Typography>
            <Typography sx={{ m: 2, fontWeight: 600 }} variant="h4" component="div">
                Services We Provide
                </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service=><Service
                        key={service.name}
                        service={service}
                    ></Service>)
                }
            </Grid>
            </Container>
        </Box>
    );
};

export default Services;