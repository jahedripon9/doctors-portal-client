import { Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const DentalCare = () => {
    return (
        <Container sx={{py:5}}>
            <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <img style={{width: '75%' }} src="https://i.ibb.co/Qb0XmS7/treatment.png" alt="" />
            </Grid>
            <Grid item xs={4} md={6}>
            <Typography style={{textAlign:'left', marginTop:20}}  variant="h3" gutterBottom component="div">
            Exceptional Dental Care, on Your Terms
            </Typography>
            <Typography style={{textAlign:'left', color:'#95a5a6', fontSize:'18px'}}  variant="p" gutterBottom component="div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit earum labore consequatur autem. Aperiam et, nihil animi, reprehenderit veniam tempore dignissimos eligendi sequi ipsum amet nesciunt officia optio incidunt iure praesentium rerum minus temporibus laborum asperiores quas ipsam consequatur sed quos! Quaerat consequuntur quis provident odio soluta totam error accusamus, consequatur voluptas molestias eius expedita illum beatae eveniet saepe itaque.
            </Typography>
            <Button style={{marginLeft:'-80%', marginTop:'20%'}} variant="contained">Learn More</Button>
            </Grid>
        </Grid>
        </Container>
    );
};

export default DentalCare;