import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom"; // for navigation

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow-sm px-4"
      style={{ backgroundColor: "#d0f0c0" }} // 🌿 light green background
    >
      <div className="container-fluid">
        {/* Left: Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="src/assets/logo.jpg"
            alt="Logo"
            width="60"
            height="60"
            className="me-2 "
            style={{ objectFit: "cover" }}
          />
        
        </Link>

        {/* Center: Title */}
        <div className="mx-auto">
          <h4 className="m-0 fw-bold text-success text-center">PLANT</h4>
        </div>

        {/* Right: Cart icon */}
        <div className="d-flex align-items-center">
          <button className="btn btn-outline-success rounded-pill px-3">
            <i className="bi bi-cart3 me-1"></i> Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
