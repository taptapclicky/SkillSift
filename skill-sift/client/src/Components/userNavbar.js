import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
export default function UserNavbar(props) {
  const logout = () => {
    localStorage.removeItem("LoggedInState");
    localStorage.removeItem("loggedInUser");
    window.location = "/";
  };
  return (
    <div className="nav">
      <NavLink href="/">
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
      </NavLink>
      <div className="nav-menu">
        <NavLink className="nav-item nav-link" to="/contact">
          Contact
        </NavLink>
        <NavLink className="nav-item nav-link" to="/reviews">
          Reviews
        </NavLink>
        <NavLink className="nav-item nav-link" to="/services">
          Services
        </NavLink>
        <NavLink
          className="nav-item nav-link btn btn-outline-success"
          to="/"
          onClick={logout}
        >
          SignOut
        </NavLink>
      </div>
    </div>
  );
}
