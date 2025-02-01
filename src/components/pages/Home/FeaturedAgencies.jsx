import React from 'react';
import './featuredAgency.css';

const featuredAgencies = [
  {
    name: "Creative Agency",
    logo: "/assets/agency-logo1.jpg",
    description: "We provide innovative digital marketing solutions to help your brand grow.",
    rating: 4.5,
    services: ["Marketing", "Branding", "Web Development"],
  },
  {
    name: "Tech Solutions Co.",
    logo: "/assets/agency-logo2.jpg",
    description: "Specializing in custom software solutions and app development.",
    rating: 4.8,
    services: ["App Development", "Software Solutions", "Cloud Services"],
  },
  {
    name: "Design Hub",
    logo: "/assets/agency-logo3.jpg",
    description: "Creative designs for your business and branding needs.",
    rating: 4.2,
    services: ["Graphic Design", "Web Design", "UI/UX"],
  },
  {
    name: "Consulting Experts",
    logo: "/assets/agency-logo4.jpg",
    description: "Business consulting to help you streamline your operations and growth.",
    rating: 4.7,
    services: ["Consulting", "Business Strategy", "Market Analysis"],
  },
  {
    name: "Non-government Experts",
    logo: "/assets/agency-logo4.jpg",
    description: "Helpping local business to help you streamline your operations and growth.",
    rating: 4.7,
    services: ["Consulting", "Business Strategy", "Market Analysis"],
  },
  {
    name: "Education Experts",
    logo: "/assets/agency-logo4.jpg",
    description: "School consulting to help you streamline your operations and growth.",
    rating: 4.7,
    services: ["Consulting", "Business Strategy", "Market Analysis"],
  },
  
];

const FeaturedAgencies = () => {
  return (
    <div className="featured-agencies">
      <h2>Featured Agencies</h2>
      <div className="agency-cards">
        {featuredAgencies.map((agency, index) => (
          <div key={index} className="agency-card">
            <img src={agency.logo} alt={agency.name} className="agency-logo" />
            <h3>{agency.name}</h3>
            <p>{agency.description}</p>
            <p><strong>Rating:</strong> {agency.rating} ★</p>
            <div className="agency-services">
              {agency.services.map((service, index) => (
                <span key={index} className="service-tag">{service}</span>
              ))}
            </div>
            <button className="view-details-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedAgencies;
