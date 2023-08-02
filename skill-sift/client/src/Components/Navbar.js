import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-menu">
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/signin">Login</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/reviews">Reviews</Link>
      </div>
    </div>
  );
};

export default Navbar;
