import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/pages/Home/Home'
import AgencyDirectory from './components/pages/Agency Directory/AgencyDirectory';
import NewsEvent from './components/pages/NewsEvent';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import SignUp from './Signup'
import Login from './Login'
import Privacy from './Privacy'
import './styles/nav.css';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency-directory" element={<AgencyDirectory />} />
        <Route path="/news-event" element={<NewsEvent />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path = '/privacy' element={<Privacy />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
