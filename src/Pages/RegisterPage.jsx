import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useAuth } from '../contexts/AuthContextProvider';




const RegisterPage = () => {
  const { handleRegister, error, setError, loading } = useAuth();

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passConf, setPassConf] = useState('');

  function handleSave(){
    if(!username.trim() || !email.trim() || !password.trim() || !passConf.trim()){
        alert('Some inputs are empty!');
        return;
    } else {
        let formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        formData.append("password2", passConf);
        handleRegister(formData, navigate);
    }
  };

  useEffect(() => {
    setError(false)
  }, []);

  if(loading){
    return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20%'}}>Loading...</div>
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000a12'
      },
    },
  });
  
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
      <div style={{background: '#78909c', width: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '20px', opacity: '95%'}}>
        <h2>Registration</h2>
        {error ? <h3>{error}</h3> : null}
        <Box
        component="form"
        sx={{
          color: 'white',
          '& > :not(style)': { m: 1, width: '25ch' },
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center'
        }}
        noValidate
        autoComplete="off"
      >
       <ThemeProvider theme={theme}>
       <TextField  onChange={(e) => setUsername(e.target.value)} value={username} label="Username" variant="standard" />
       <TextField type="email" onChange={(e) => setEmail(e.target.value)} value={email} label="Email" variant="standard" />
       <TextField type="password" onChange={(e) => setPassword(e.target.value)} value={password} label="Password" variant="standard" />
       <TextField type="password" onChange={(e) => setPassConf(e.target.value)} value={passConf} label="Password confirmation" variant="standard" />
       </ThemeProvider>
      <Button onClick={handleSave} sx={{background: '#09387f', borderRadius: '20px'}} variant="contained">Register</Button>
      </Box>
      </div>
    </div>
  )
}

export default RegisterPage