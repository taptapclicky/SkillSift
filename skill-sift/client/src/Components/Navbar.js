// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/navbar.css";
// const Navbar = () => {
//   return (
//     <div className="nav">
//       <nav className="nav-menu">
//         <div>
//           <h2>Skill Sift</h2>
//         </div>
//         <div>
//           <input type="text" placeholder="Search..." />
//         </div>
//         <div>
//           <Link to="/about">About</Link>
//           <Link to="/sign-in">Sign In</Link>
//           <Link to="/sign-up">Sign Up</Link>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

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
      </div>
    </div>
  );
};

export default Navbar;
