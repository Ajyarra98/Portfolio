import './App.css';
import React from 'react';
import Aboutme from './PortfolioProject/About/Aboutme';
import Contact from './PortfolioProject/Contact/Contact';
import Copyright from './PortfolioProject/Copyright/Copyright';
import Profile from './PortfolioProject/Home/Profile';
import Resume from './PortfolioProject/Resume/Resume';

function App() {
  return (
    <div className="App">
     <Profile/>
     <Aboutme/>
     <Resume/>
     <Contact/>
     <Copyright/>
    </div>
  );
}

export default App;
