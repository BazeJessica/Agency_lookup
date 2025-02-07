import React from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import './style/aboutPage.css';  // Custom styles for the page

const AboutPage= () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Our Agency Lookup App</h1>
        <p>
          Welcome to our Agency Lookup App! Whether you're looking for marketing
          agencies, government services, or tech innovators, our platform makes
          it easy to find the agency that best suits your needs.
        </p>
      </div>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a user-friendly platform that connects
          individuals and businesses with the right agencies. We aim to streamline
          the agency search process and provide a one-stop solution for various
          services, including marketing, design, technology, and consulting.
        </p>
      </div>

      <div className="features-section">
        <h2>Key Features</h2>
        <ul>
          <li>
            <strong>Comprehensive Directory:</strong> Explore a wide variety of
            agencies, from government institutions to creative marketing firms.
          </li>
          <li>
            <strong>Search Functionality:</strong> Easily search and filter agencies
            based on your specific needs.
          </li>
          <li>
            <strong>Detailed Agency Profiles:</strong> Get more information about
            agencies, including contact details, services offered, and location.
          </li>
          <li>
            <strong>Regularly Updated Data:</strong> Our platform is powered by real-time
            data from trusted sources like Google Places and Yelp.
          </li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>Have any questions or suggestions? We'd love to hear from you!</p>
        <div className="contact-details">
          <p>
            <FaEnvelope /> Email: <a href="mailto:contact@agencylookup.com">contact@agencylookup.com</a>
          </p>
          <p>
            <FaPhoneAlt /> Phone: +1 (555) 123-4567
          </p>
          <p>
            <FaMapMarkerAlt /> Address: 1234 Agency Lane, City, Country
          </p>
        </div>
      </div>

      <div className="back-link">
        <Link to="/agency-directory">Back to Agency Directory</Link>
      </div>
    </div>
  );
};

export default AboutPage;
