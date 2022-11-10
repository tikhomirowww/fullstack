import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContextProvider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { handleLogin, error, setError, currentEmail } = useAuth();


  function handleSave(){
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    handleLogin(formData, email, navigate);
  };

  useEffect(() => {
    setError(false);
    // currentEmail(email)
  }, [])

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
        <h2>Login</h2>
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
          <TextField  id="standard-basic" onChange={(e) => setUsername(e.target.value)} value={username} label="Username" variant="standard" />
          <TextField type="email" id="standard-basic" onChange={(e) => setEmail(e.target.value)} value={email} label="Email" variant="standard" />
          <TextField type="password" id="standard-basic" onChange={(e) => setPassword(e.target.value)} value={password} label="Password" variant="standard" />
      </ThemeProvider>
      <Button onClick={handleSave} sx={{background: '#09387f', borderRadius: '20px'}} variant="contained">Login</Button>
      </Box>
      </div>
    </div>
  )
}

export default LoginPage