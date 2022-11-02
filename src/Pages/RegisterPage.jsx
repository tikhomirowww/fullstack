import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
import Button from '@mui/material/Button';



const RegisterPage = () => {
  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: 'black',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'black',
    }
  });
  
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
      <div style={{background: '#78909c', width: '20%', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '20px', opacity: '95%'}}>
        <h2>Registration</h2>
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
       <CssTextField variant="standard"  label="Usename" id="custom-css-outlined-input" />
       <CssTextField variant="standard"  label="Email" id="custom-css-outlined-input" />
       <CssTextField variant="standard"  label="Password" id="custom-css-outlined-input" />
       <CssTextField variant="standard"  label="Password confirmation" id="custom-css-outlined-input" />
      <Button sx={{background: '#09387f', borderRadius: '20px'}} variant="contained">Register</Button>
      </Box>
      </div>
    </div>
  )
}

export default RegisterPage