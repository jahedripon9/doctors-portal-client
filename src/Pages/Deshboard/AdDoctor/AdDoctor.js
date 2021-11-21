import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AdDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if(!image){
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);

        fetch('https://thawing-retreat-53148.herokuapp.com//doctors',{
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    setSuccess('Doctor Add Successfully');
                    console.log('Doctor Add Successfully');
                }
            })
            .catch(error =>{
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <h2>Ad Doctor</h2>
            <form onSubmit={handleSubmit}>
            <TextField 
            required
            sx={{width:'50%'}} 
            label="Name" 
            type="name"
            onChange={e => setName(e.target.value)}
            variant="standard" /> <br /><br />
            <TextField 
            required
            sx={{width:'50%'}} 
            label="Eamil" 
            type="email"
            onChange={e => setEmail(e.target.value)}
            variant="standard" /> <br /><br />

            <Input accept="image/*" 
            sx={{width:'50%'}} 
            
            type="file" 
            onChange={e => setImage(e.target.files[0])}
            
            /> <br /> <br />
            <Button variant="contained" 
            type="submit">
                Add Doctor
            </Button>

            </form>
            {success && <p>{success}</p>}
        </div>
    );
};

export default AdDoctor;