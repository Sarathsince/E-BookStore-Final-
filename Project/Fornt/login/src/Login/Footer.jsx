import React from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const footerStyle = {
    background: '#000',
    padding: '30px 0px',
    fontFamily: 'Play, sans-serif',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', 
    justifyContent: 'center', 
    marginTop: '40%'
  };

  const rowStyle = {
    width: '100%',
    margin: '1% 0%',
    padding: '0.6% 0%',
    color: 'gray',
    fontSize: '0.8em',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'gray',
    transition: '0.5s',
  };

  const linkHoverStyle = {
    color: '#fff',
  };

  const ulStyle = {
    width: '100%',
  };

  const liStyle = {
    display: 'inline-block',
    margin: '0px 30px',
  };

  const mediaQueryStyle = {
    footer: {
      textAlign: 'left',
      padding: '5%',
    },
    li: {
      display: 'block',
      margin: '10px 0px',
      textAlign: 'left',
    },
    icon: {
      margin: '0% 3%',
    },
  };

  return (
    <footer style={footerStyle}>
      <div className="footer">
        <div className="row" style={rowStyle}>
          <a href="#" style={linkStyle}><FaFacebook style={{ fontSize: '2em', margin: '0% 1%' }} /></a>
          <a href="#" style={linkStyle}><FaInstagram style={{ fontSize: '2em', margin: '0% 1%' }} /></a>
          <a href="#" style={linkStyle}><FaYoutube style={{ fontSize: '2em', margin: '0% 1%' }} /></a>
          <a href="#" style={linkStyle}><FaTwitter style={{ fontSize: '2em', margin: '0% 1%' }} /></a>
        </div>

        <div className="row" style={rowStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}><a href="#" style={linkStyle}>Contact us</a></li>
            <li style={liStyle}><a href="#" style={linkStyle}>Our Services</a></li>
            <li style={liStyle}><a href="#" style={linkStyle}>Privacy Policy</a></li>
            <li style={liStyle}><a href="#" style={linkStyle}>Terms & Conditions</a></li>
            <li style={liStyle}><a href="#" style={linkStyle}>Career</a></li>
          </ul>
        </div>

        <div className="row" style={rowStyle}>
          <b> KITAB</b> Copyright © 2024 Kitab - All rights reserved || Designed By: <b>SARATH S</b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
