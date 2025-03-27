import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./images/logo.png";

const Navbar = (props) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("loggedInUser");

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Remove user session
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="navbar-container">
      <div>
        <Link className="logo-container" to="/">
          <img className="navbar-logo" src={logo} alt="PawFinds Logo" />
          <p>{props.title}</p>
        </Link>
      </div>
      <div>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/pets">Pets</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        {user && (
          <button className="Navbar-button" onClick={handleLogout}>
            Logout
          </button>
        )}
        <Link to="/services">
          <button className="Navbar-button">Give a Pet</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
