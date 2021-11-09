import { Container, Grid } from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';

const AppointmentDoctor = ({date, setDate}) => {
    
    return (
       <Container>
           <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                <Calender date={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={12} md={6}>
                <img style={{width:'100%'}} src="https://i.ibb.co/x7Pcz7Y/chair.png" alt="" />
                </Grid>
           </Grid>
       </Container>
    );
};

export default AppointmentDoctor;