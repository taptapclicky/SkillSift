import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <a href="/">
          <h2
            style={{
              display: "inline-block",
              color: "white",
              fontSize: " 30px",
              marginBottom: "20px",
            }}
          >
            Skill Sift
          </h2>
        </a>

        {/* <input type="text" placeholder="Search..." /> */}
      </div>
      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/sign-up">Signup</Link>
        <Link to="/sign-in">Login</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/services">Services</Link>
      </div>
    </div>
  );
};

export default Navbar;
