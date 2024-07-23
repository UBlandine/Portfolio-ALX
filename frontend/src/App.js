
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './components/Landing/LandingPage';
import BlogPage from './components/Blog/BlogPage';
import AboutPage from './components/About/About';
import SignupPage from './components/Signup/SignupPage';
import LoginPage from './components/Login/LoginPage';

function App() {
  return (
    <Router>
    <div className="App">
     <Routes>
      
      <Route path="/" element={<LandingPage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/blog' element={<BlogPage/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
