import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingAppointment from '../BookingAppointment/BookingAppointment';

const Booking = ({booking, date, setBookingSuccess}) => {
    const {name, time, space} = booking;

    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
             <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 3 }}>
                <Typography style={{color:'#00cec9', fontWeight:'bold', fontSize:'28px'}} variant="h5" gutterBottom component="div">
                    {name}
                </Typography>  
                <Typography variant="h6" gutterBottom component="div">
                    {time}
                </Typography>  
                <Typography variant="p" gutterBottom component="div">
                    {space} Space Available
                </Typography>  
                <Button onClick={handleBookingOpen} style={{background:'#00cec9'}} variant="contained">Book Appointment</Button>
                </Paper>       
            </Grid>
            <BookingAppointment
            date={date}
            booking={booking}
            openBooking={openBooking}
            handleBookingClose={handleBookingClose}
            setBookingSuccess={setBookingSuccess}
            ></BookingAppointment>
        </>
    );
};

export default Booking;<h2>This is Booking</h2>