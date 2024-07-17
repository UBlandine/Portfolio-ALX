import React from 'react';
import './landing.css';
import { Link } from 'react-router-dom';
import image from '../images/img1.jpg';
import logo from '../images/logo.png';
import scroll from '../images/scroll.png';

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <nav className='navbar'>
        <div className='logo'>
        <img src={logo} alt="Logo" />

        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className='scroll'>
        <img src={scroll} alt="Scroll" />
        </div>
      </nav>
      <div className='main-content'>
      <div className='home'>
      <header className='header'>
        {/* <h1>Welcome to Task Manager</h1> */}
        <h2>Your 100% TM Solution</h2>
        <p>Simplifying Management <br /> With Technologies!</p>
        <div className='buttons'>
          <button className='search'>
            Search
            <button className='submit'>Submit</button>
          </button>
        </div>
      </header>
      <div className='tasks'>
        <img src={image} alt="Logo" />

      </div>
      </div>
    </div>
    </div>
  );
}

export default LandingPage;
