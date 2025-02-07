import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/pages/Home/Home'
import AgencyDirectory from './components/pages/Agency Directory/AgencyDirectory';
import NewsEvent from './components/pages/NewsEvent';
import AboutPage from './components/pages/AboutPage';
import Contact from './components/pages/Contact';
import SignupPage from './Signup.jsx'
import Login from './Login'
import Privacy from './Privacy'
import './styles/nav.css';
import Footer from './Footer';
import AgencyDetails from './components/pages/Agency Directory/AgencyDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency-directory" element={<AgencyDirectory />} />
        <Route path="/news-event" element={<NewsEvent />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<Login />} />
        <Route path = '/privacy' element={<Privacy />} />
        <Route path="/agency/:agencyName" element={<AgencyDetails />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
