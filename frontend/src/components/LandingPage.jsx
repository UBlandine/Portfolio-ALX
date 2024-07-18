import React, { useState, useEffect } from 'react';
import './landing.css';
import { Link } from 'react-router-dom';
import image from '../../src/images/img1.jpg';
import logo from '../../src/images/logo.png';

const LandingPage = () => {
  const [messages, setMessages] = useState([
    "Your 100% TM Solution",
    "Efficient Task Management",
    "Streamlined Workflows"
  ]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) =>
        prevIndex === messages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change message every 3 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [messages]);

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
        <div className='login'>Log in</div>
        <button className='signin'>Sign in</button>
      </nav>
      <div className='main-content'>
        <header className='header'>
          <h1>Welcome to Task Manager</h1>
          <h2>{messages[currentMessageIndex]}</h2>
          
        </header>
        <div className='tasks'>
          <img src={image} alt="Logo" />
        </div>
        <div className='buttons'>
          <button className='search'>
            Search
          </button>
          <button className='submit'>Get started</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
