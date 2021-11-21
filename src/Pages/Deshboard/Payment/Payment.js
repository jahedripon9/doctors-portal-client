import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckOutForm from './CheckOutForm';

const stripePromise = loadStripe('pk_test_51JxNL1AF9lLEGBofKl1IEFaVt3yt2ewuyoz0h9QWpv4b6DVZnWZNmoKOaQAhYPk7Y6kkoUuhxuCN8UCw0RPsypxj00LXxvmidl');

const Payment = () => {
    const {appointmentId} = useParams()
    const [appointment, setAppointment] = useState({});
    useEffect(()=>{
        fetch(`https://thawing-retreat-53148.herokuapp.com/appointments/${appointmentId}`)
        .then(res => res.json())
        .then(data => setAppointment(data));
    },[appointmentId])
    return (
        <div>
            <h1>Please Pay for : {appointment.patientName}</h1>
            <h1> Service Name : {appointment.serviceName}</h1>
            <h2>Pay: ${appointment.price}</h2>
            {appointment?.price && <Elements stripe={stripePromise}>
            <CheckOutForm 
            appointment={appointment}
            />
            </Elements>}
        </div>
    );
};

export default Payment;