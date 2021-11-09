import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import Typography from '@mui/material/Typography';
import { TextField, Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const BookingAppointment = ({openBooking, handleBookingClose, booking, date, setBookingSuccess}) => {
    const {name, time} = booking;
    const{user}=useAuth();
    const initialInfo = {patientName: user.displayName, email: user.email, phone: ''}
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e =>{
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...bookingInfo};
      newInfo[field]= value;
      setBookingInfo(newInfo);
    }

    const handelBookingSubmit = e =>{
      e.preventDefault()
      handleBookingClose()
      // collect Data
      const appointment = {
        ...bookingInfo,
        time,
        serviceName: name,
        date: date.toLocaleDateString()
      }
      // send to the Server
      fetch('http://localhost:5000/appointments', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(appointment)
      }) 
      .then(res => res.json())
      .then(data => {
        if(data.insertedId){
         
          handleBookingClose();
        }
      })
      e.preventDefault()
    }
    const handleBookClose = e =>{
      e.preventDefault()
      handleBookingClose()
    }
    return (
      <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openBooking}>
              <Box sx={style}>
                <Typography id="transition-modal-title" sx={{textAlign: 'center', color:'#00cec9'}} variant="h6" component="h2">
                  {name}
                </Typography>
                <form onSubmit={handelBookingSubmit}>

                <TextField
                sx={{textAlign: 'center', width:'90%', m:2}}
                    disabled
                    label="Time"
                    id="outlined-size-small"
                    defaultValue={time}
                    size="small"
                  />
                <TextField
                sx={{textAlign: 'center', width:'90%' , m:2}}
                    required
                    label="Name"
                    id="outlined-size-small"
                    name="patientName"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    size="small"
                  />
                <TextField
                sx={{textAlign: 'center', width:'90%' , m:2}}
                    required
                    label="Phone"
                    id="outlined-size-small"
                    name='phone'
                    onBlur={handleOnBlur}
                    defaultValue="Phone Number"
                    size="small"
                  />
                <TextField
                sx={{textAlign: 'center', width:'90%', m:2}}
                    required
                    label="Email"
                    id="outlined-size-small"
                    name="name"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    size="small"
                  />
                <TextField
                sx={{textAlign: 'center', width:'90%', m:2}}
                    disabled
                    label="Date"
                    id="outlined-size-small"
                    defaultValue={date.toDateString()}
                    size="small"
                  />
                  <Button type="submit" style={{background:'#00cec9', marginRight:'2'}} variant="contained">Submit</Button>
                  <Button type="close" onClick={handleBookClose} style={{background:'#00cec9', marginRight:'5'}} variant="contained">Close</Button>

                </form>
              </Box>
            </Fade>
     </Modal>
    );
};

export default BookingAppointment;