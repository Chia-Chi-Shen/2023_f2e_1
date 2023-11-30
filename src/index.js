import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/navbar';
import About from './components/about';
import Event from './components/event';
import Policy from './components/policy';
import Donation from './components/donation';
import Contact from './components/contact';
import Footer from './components/footer';
import reportWebVitals from './reportWebVitals';
// import './sass/main.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <About/>
    <Event/>
    <Policy/>
    <Donation/>
    <Contact/>
    <Footer/>
  </React.StrictMode>
);

reportWebVitals();
