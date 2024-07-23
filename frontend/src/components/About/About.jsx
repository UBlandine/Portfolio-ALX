// src/AboutPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './about.css';

const AboutPage = () => {
  return (
    <div className="about-page-container">
      <div className="about-section">
        <h2>Who We Are</h2>
        <div className="about-content">
          <h3>About Us</h3>
          <p>We are an effective solution to manage your tasks more efficiently and effectively. With us you can organize and complete your task with ease.</p>
          <h3>Our Mission</h3>
          <p>Empower productivity through seamless task management. Simplify your workflow, achieve more.</p>
          <div className="stats">
            <div><strong>8+</strong> Our team</div>
            <div><strong>150+</strong> Our satisfied customers</div>
            <div><strong>4+</strong> Years of experience</div>
          </div>
        </div>
      </div>
      <div className="what-we-do-section">
        <h2>What We Do</h2>
        <div className="services">
          <div>
            <h3>/01 Organize</h3>
            <p>Streamline your tasks and projects for effortless management.</p>
          </div>
          <div>
            <h3>/02 Collaborate</h3>
            <p>Work together efficiently and stay in sync.</p>
          </div>
          <div>
            <h3>/03 Achieve</h3>
            <p>Reach your goals with ease and efficiency timely.</p>
          </div>
        </div>
      </div>
      <div className="contact-form-section">
        <h2>Let’s create☆ Let’s cook</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default AboutPage;
