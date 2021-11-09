import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url('https://i.ibb.co/2FSJ1Xn/appointment-bg.png')`,
    marginTop: 175,
    margin: 100,
    backgroundColor: 'rgba(52, 73, 94, 0.7)',
    backgroundBlendMode: 'darken, luminosity',
    backgroundPosition: 'right 35% bottom 45%;',

}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <img
                 style={{ width:400, marginTop: '-110px'}}
                src="https://i.ibb.co/C5pJbjP/doctor.png" alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ 
                    display: 'flex', 
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    alignItems: 'center'
                    
                    }}>
                <Box>
                    <Typography sx={{  color: 'rgb(26, 188, 156)', fontWeight:'900', my:3 }} variant='h6' >
                        Appointment
                    </Typography>
                    <Typography sx={{  color: 'text.disabled'  , my:3}} variant='h4' style={{color: 'white' }}>
                        Make an Appointment Today
                    </Typography>
                    <Typography  variant='h6' sx={{ my:3}} style={{ fontWeight:'300', color: 'white', fontSize: '14px'}}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure necessitatibus non, laudantium temporibus aut et consequuntur quasi hic odit cupiditate.
                    </Typography>
                    <Button variant="contained">Learn More</Button>
                </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;