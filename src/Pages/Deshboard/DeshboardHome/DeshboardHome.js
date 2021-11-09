import { Grid } from '@mui/material';
import React from 'react';
import Calender from '../../Shared/Calender/Calender';
import Appoinrments from '../Appoinrments/Appoinrments';

const DeshboardHome = () => {
    const [date, setDate] = React.useState(new Date);
    return (
        <div>
            <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
            <Calender
            date={date}
            setDate={setDate}
            ></Calender>
            </Grid>
            <Grid item xs={12} sm={7}>
                <Appoinrments date={date}></Appoinrments>
            </Grid>
        </Grid>
        </div>
    );
};

export default DeshboardHome;