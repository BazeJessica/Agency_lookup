import React from "react";
import "./home.css";
import FeaturedAgencies from "./FeaturedAgencies";
import Testimonials from "./Testimony";
import NewsSection from "./News/E/NewsSection";
import Newsletter from "./News/E/Newsletter";

const Home = () => {
  return (
    <>
      <div className="title-section">
        <h1 className="title">
          Welcome to Agency Lookup – Your trusted platform to easily find and
          explore top agencies around you
        </h1>
        <h3 className="subtitle">All the Best Agencies, One Platform</h3>
        <h5>
          Easily search and explore agencies in various industries and make
          smarter choices for your projects.
        </h5>
        <div className="searchbar">
          {/* Add input element for search functionality */}
          <input type="text" placeholder="Search agencies..." />
          <select>
            <option value="marketing">Marketing</option>
            <option value="branding">Branding</option>
            <option value="web-design">Web Design</option>
          </select>

          <button className="cta-button">Start Your Search</button>
        </div>{" "}
      </div>
      <main>
        <p className="main_content">
          At Agency Lookup, we help you discover the best agencies for your
          needs. With a simple search, you can explore detailed agency profiles,
          including services offered, ratings, reviews, and contact information.
          We aim to provide you with the tools you need to make informed
          decisions and collaborate with the right agency for your business or
          personal project.
        </p>
        <div>
          <FeaturedAgencies />
        </div>

        <div>
            <div className="testimonial">
              <Testimonials />
            </div>
        </div>
        <div>
          <div>
            <NewsSection />
          </div>
        </div>
        <div>
          <Newsletter/>
        </div>
      </main>
    </>
  );
};

export default Home;
