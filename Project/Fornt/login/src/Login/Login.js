import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  TextField,
  Container,
  Typography,
  CssBaseline,
  Paper,
} from '@mui/material';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '80vh',
  backgroundColor: 'black',
  borderRadius: '10px',
  marginTop: '50px',
  width : '40%'
};

const paperStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
  width: '400px',
};

const formStyle = {
  width: '100%',
  marginTop: '1rem',
};

const labelStyle = {
  marginBottom: '0.5rem',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  marginBottom: '1rem',
};

const buttonStyle = {
  backgroundColor: 'black',
  color: 'white',
  padding: '1rem',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const linkStyle = {
  marginTop: '1rem',
  color: 'black',
  textDecoration: 'none',
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login clicked');
  };

  return (
    <Container style={containerStyle} component="main">
      <CssBaseline />
      <Paper style={paperStyle} elevation={3}>
        <Typography variant="h5"><b>Login</b></Typography>
        <form style={formStyle} onSubmit={handleSubmit}>
          <label style={labelStyle}>
            <TextField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              variant="outlined"
              fullWidth
              style={inputStyle}
            />
          </label>
          <label style={labelStyle}>
            <TextField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              variant="outlined"
              fullWidth
              style={inputStyle}
            />
          </label>
          <Button type="submit" variant="contained" style={buttonStyle} fullWidth>
          <Link to="/" style={{color:'white',textDecoration:'none'}}>Login</Link>
          </Button>
          <Typography style={linkStyle}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Typography>
          <Typography style={linkStyle}>
            Froget password? <Link to="">Click?</Link>

          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
