import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Typography, Container, Box } from '@mui/material';


const bannerBg = {
    background: `url('https://i.ibb.co/Wc8q7Xx/bg.png')`,
    marginTop:'20px'
   

}

const centerPosition = {
    display: 'flex',
    height: 450,
    alignItems: 'center'
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item style={{...centerPosition, textAlign:'left'}} xs={12} md={6}>
           <Box>
           <Typography variant="h3">
                Your New Smile <br />
                Starts Here
            </Typography>
            <Typography variant="h6" sx={{my: 5, color:"gray"}}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem suscipit laborum cum animi non reprehenderit nulla ullam, libero exercitationem possimus! <br />
            </Typography>
            <Button variant="outlined">Get Appointment</Button>
           </Box>
          </Grid>
          <Grid item xs={6} md={5} style={centerPosition}>
            <img style={{width: '130%' }} src="https://i.ibb.co/x7Pcz7Y/chair.png" alt="" />
          </Grid>
        </Grid>
      </Container>
    );
};

export default Banner;
