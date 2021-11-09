import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentDoctor from '../AppointmentDoctor/AppointmentDoctor';
import AvailableAppointment from '../AvailableAppointment/AvailableAppointment';



const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentDoctor date={date} setDate={setDate}></AppointmentDoctor>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appointment;<h2>hello</h2>