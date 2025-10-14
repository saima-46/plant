import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        backgroundColor: "#e8f5e9", 
        minHeight: "100vh",
      }}
    >
      <div className="row w-75 bg-white rounded-4 shadow p-5">
        {/* Left Section */}
        <div className="col-md-5 d-flex flex-column justify-content-center text-center text-md-start mb-4 mb-md-0">
          <h1 className="text-success fw-bold mb-3">
            Welcome to Paradise Nursery 🌱
          </h1>
          <p className="text-muted fs-5 mb-4">Where Green Meets Serenity</p>
          <Link to="/plant">
            <button className="btn btn-success btn-lg px-4 rounded-pill shadow-sm">
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Section */}
        <div className="col-md-7">
          <h4 className="text-success mb-3">About Our Nursery</h4>
          <p className="text-muted fs-5">
            Welcome to <span className="fw-bold text-success">Paradise Nursery</span> — 
            your one-stop destination for all things green! We specialize in providing 
            healthy, vibrant plants that breathe life into your surroundings.
          </p>
          <p className="text-muted fs-5">
            Whether you're looking for indoor plants to purify your air, outdoor plants 
            to beautify your garden, or gardening accessories — we’ve got you covered.
          </p>
          <p className="text-muted fs-5 mb-0">
            Explore our collection and transform your space into a paradise of nature. 🌿
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
