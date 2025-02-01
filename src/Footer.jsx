import React from 'react';
import './styles/footer.css';
import { SiFacebook } from "react-icons/si";
import { FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">About Us</h3>
          <p className="footer-text">
            We are a platform that connets you to top agencies in all work fieldsproviding the best solutions to help in your area of needs.
          </p>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/about" className="footer-link">About</a></li>
            <li><a href="/services" className="footer-link">Agency Profile</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
            <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="footer-socials">
            <a href="https://facebook.com" className="footer-social-icon"><SiFacebook style={{color:'white', fontSize:'20px', direction:'flex', }}/> Facebook </a>
            <a href="https://twitter.com" className="footer-social-icon"><FiTwitter style={{color:'white', fontSize:'20px', direction:'flex', }}/>Twitter</a>
            <a href="https://linkedin.com" className="footer-social-icon"><FaLinkedin style={{color:'white', fontSize:'20px', direction:'flex', }}/> LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-text">© 2025 BazeJessica BazzTech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
