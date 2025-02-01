import React from 'react';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <h2 className="newsletter-title">Stay Updated!</h2>
      <p className="newsletter-description">
        Sign up for our newsletter to get the latest updates and offers.
      </p>
      <div className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
        />
        <button className="newsletter-button">Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;
