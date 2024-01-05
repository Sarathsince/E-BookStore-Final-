import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';

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
  height: '100vh',
  backgroundColor: '#050505',
  borderRadius: '10px',
  marginTop: '50px',
  backgroundColor:'#050505',
  width : '40%'
  
};

const paperStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)',
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
  backgroundColor: '#050505',
  color: 'white',
  padding: '1rem',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const linkStyle = {
  marginTop: '1rem',
  color: '#050505',
  textDecoration: 'none',
};


const WelcomeMessage = ({ username }) => {
  return (
    <Typography variant="h6" style={{ marginTop: '1rem' }}>
      Welcome{username}!
    </Typography>
  );
};

const socialIconContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '1rem',
  width: '100%',
};

const socialIconStyle = {
  fontSize: 40,
  cursor: 'pointer',
};

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [showWelcome, setShowWelcome] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission
    setShowWelcome(true);
  };

  return (
    <div class="parent">
  
    <Container style={containerStyle} component="main">
    
    <CssBaseline />
    <Paper style={paperStyle} elevation={3}>
    <Typography variant="h5"><b>Sign Up</b></Typography>
        <form style={formStyle} onSubmit={handleSubmit}>
          <label style={labelStyle}>
            <TextField
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Username"
              variant="outlined"
              fullWidth
              style={inputStyle}
            />
          </label>
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
          <label style={labelStyle}>
            <TextField
              type="password"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              label="Repeat Password"
              variant="outlined"
              fullWidth
              style={inputStyle}
            />
          </label>
          <Button type="submit" variant="contained" style={buttonStyle} fullWidth>
            <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>
              Signup
            </Link>
          </Button>
          {showWelcome && <WelcomeMessage username={username} />}
          <Typography style={linkStyle}>
            Already have an account? <Link to="/login">Login</Link>
          </Typography>
          <Typography variant="h6" style={{ marginTop: '1rem', textAlign: 'center' }}>
          or
        </Typography>
        <Typography variant="h6" style={{ marginTop: '1rem', textAlign: 'center' }}>
        Continue with
        <div style={{ ...socialIconContainerStyle, marginTop: '0.5rem' }}>
          <GoogleIcon style={{ ...socialIconStyle, color: '#4285F4' }} />
          <span style={{ margin: '0 0.5rem' }}> {/* Adjust the margin as needed */}
            {/* Add some spacing between text and icons */}
          </span>
          <InstagramIcon style={{ ...socialIconStyle, color: '#E4405F' }} />
        </div>
      </Typography>
      
      
        </form>
      </Paper>
    </Container>
    </div>
  );
};

export default SignUp;