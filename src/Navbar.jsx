import React from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav">
        <div className="nav_logo">
          <img src="/public/assets/logo.jpg" alt="Logo" />
        </div>

          <div className="nav_links">
            <Link to="/">Home</Link>
            <Link to="/agency-directory">Agency Directory</Link>
            <Link to="/agency-profile">Agency Profile</Link>
            <Link to="/news-event">News/Event</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to='/signup'>SIgnUp</Link>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
