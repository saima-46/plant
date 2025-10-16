import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


const Subheading = () => {
  return (
    <>
    
    
    <nav
      className="navbar navbar-expand-lg shadow-sm"
      style={{ backgroundColor: "#66bb6a" }} 
    >
      <div className="container-fluid">
        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links (aligned left) */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white fw-semibold">
                Home
              </Link>
            </li>

           

            <li className="nav-item">
              <Link to="/plant" className="nav-link text-white fw-semibold">
                Plants
              </Link>
            </li>
             <li className="nav-item">
              <Link to="/about" className="nav-link text-white fw-semibold">
                About
              </Link>
            </li>
            

            <li className="nav-item">
              <Link to="/contact" className="nav-link text-white fw-semibold">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Subheading;
