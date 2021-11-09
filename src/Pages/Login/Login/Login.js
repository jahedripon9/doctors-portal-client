import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({})
    const {user, loginUser, isLoading, error, googleSignin} = useAuth();

    const location = useLocation()
    const histroy = useHistory()


    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
    
        const newLoginData = {...loginData}
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const handelLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, histroy);
        e.preventDefault();
    }

    const handleGoogleSignin = () =>{
        googleSignin(location, histroy)
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid sx={{mt:10}} item xs={12} md={6}>
                <Typography variant="body1" gutterBottom>
                   Login
                </Typography>
                <form onSubmit={handelLoginSubmit}>
                <TextField  sx={{width:'75%', m:1}}
                id="standard-basic" 
                label="User Email"
                name='email' 
                onBlur={handleOnBlur}
                variant="standard" />
                <br />
                <TextField  sx={{width:'75%', m:1}}
                id="standard-basic" 
                label="User Password" 
                name="password"
                onBlur={handleOnBlur}
                type="password"
                variant="standard" />
                
                <Button 
                sx={{width:'75%', m:1}} 
                type='submit' 
                variant="contained">Login</Button>
                <NavLink 
                style={{textDecoration:'none'}} 
                to='/register'><Button 
                variant="text">New User? Please Register</Button>
                </NavLink>
                {isLoading && <CircularProgress />}
                {user?.email && <Alert severity="success">'success', 'Amazing! Your Account has been Login Successfully.'</Alert>}
                {error && <Alert severity="error">{error}</Alert>}
                </form>
                <Button onClick={googleSignin} variant="contained">Sign in with Google</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width:'100%'}} 
                    src="https://i.ibb.co/6sF7dpW/login.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;