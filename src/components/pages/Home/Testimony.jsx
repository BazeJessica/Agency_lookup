import React from 'react';
import './testimonial.css'
const testimonials = [
  {
    name: "BrandBoost Agency",
    logo: "/assets/agency-logo1.jpg",
    description: "BrandBoost helped us elevate our online presence and increase engagement with our audience.",
    rating: 4.9,
  },
  {
    name: "Innovative Solutions",
    logo: "/assets/agency-logo2.jpg",
    description: "Their software solutions were exactly what we needed to automate our workflow and improve productivity.",
    rating: 4.8,
  },
  {
    name: "MarketPro Consulting",
    logo: "/assets/agency-logo4.jpg",
    description: "MarketPro's in-depth market analysis helped us to align our business strategy with real-time trends.",
    rating: 4.6,
  },
  {
    name: "Visionary Marketing",
    logo: "/assets/agency-logo5.jpg",
    description: "The campaign they created for us resulted in a 40% increase in conversions in just three months!",
    rating: 5.0,
  },
  {
    name: "Creative Edge Agency",
    logo: "/assets/agency-logo6.jpg",
    description: "Creative Edge delivered top-notch branding services that helped us stand out in a competitive market.",
    rating: 4.7,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2>What Our Clients Are Saying</h2>
      <div className="testimonials-cards">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.logo} alt={testimonial.name} className="testimonial-logo" />
            <h3>{testimonial.name}</h3>
            <p className="testimonial-description">{testimonial.description}</p>
            <p><strong>Rating:</strong> {testimonial.rating} ★</p>
            <button className="view-details-btn">View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
