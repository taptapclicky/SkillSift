import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <h2>Skill Sift</h2>
      </div>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
      <div>
        <Link to="/about">About</Link>
        <Link to="/sign-in">Sign In</Link>
        <Link to="/sign-up">Sign Up</Link>
      </div>
    </nav>
  );
}

export default Navbar;
