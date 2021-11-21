import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({})
    const navigate = useNavigate();
    const {user, regUser, isLoading, error} = useAuth();

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
    
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handelLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your Password Not Match')
            return
        }
        regUser(loginData.email, loginData.password,loginData.name, navigate);
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                 <Grid sx={{mt:10}} item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                   Registasion
                </Typography>
                {!isLoading && <form onSubmit={handelLoginSubmit}>
                <TextField  sx={{width:'75%', m:1}}
                id="standard-basic" 
                label="Your Name"
                name='Name' 
                onBlur={handleOnBlur}
                variant="standard" />
                <TextField  sx={{width:'75%', m:1}}
                id="standard-basic" 
                label="Register Email"
                name='email' 
                type='email'
                onBlur={handleOnBlur}
                variant="standard" />
                <br />
                <TextField  sx={{width:'75%', m:1}}
                id="standard-basic" 
                label="Password" 
                name="password"
                onBlur={handleOnBlur}
                type="password"
                variant="standard" />
                <TextField  sx={{width:'75%', m:1}}
                id="standard-basic" 
                label="Retype Password" 
                name="password2"
                onBlur={handleOnBlur}
                type="password"
                variant="standard" />
                
                <Button 
                sx={{width:'75%', m:1}} 
                type='submit' 
                variant="contained">Register</Button>
                <NavLink
                style={{textDecoration:'none'}} 
                to='/login'><Button 
                variant="text">Already Register? Please Login</Button>
                </NavLink>
                </form>}
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">'success', 'Amazing! Your Account has been Created Successfully.'</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} 
                    src="https://i.ibb.co/6sF7dpW/login.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;