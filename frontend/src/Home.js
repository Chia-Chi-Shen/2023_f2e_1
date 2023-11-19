import React from 'react';
import './Home.css';
import Navbar from './components/navbar';
import About from './components/about';
import Event from './components/event';
import Policy from './components/policy';
import Donation from './components/donation';
import Contact from './components/contact';

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Event/>
      <Policy/>
      <Donation/>
      <Contact/>
    </div>
  );
}

export default Home;
