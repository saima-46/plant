import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../component/header";
import Subheading from "../../component/subHeading.jsx";

const About = () => {
  return (<>
   
   
    <div className="container-fluid py-5" style={{
        backgroundColor: "#e8f5e9", 
        minHeight: "100vh",
      }}>
      {/* Title Section */}
      <div className="text-center mb-4">
        <h2 className="text-success fw-bold">About Us</h2>
        <hr className="w-25 mx-auto border-success" />
      </div>

      {/* Text Section */}
      <div className="text-center mx-auto" style={{ maxWidth: "800px" }}>
        <h4 className="text-success fw-semibold mb-3">
          Welcome to PlantStore 🌱
        </h4>
        <p className="text-muted fs-5">
          At <span className="fw-bold text-success">PlantStore</span>, we believe
          in bringing nature closer to you. Our mission is to make every home
          greener and every space more refreshing with our collection of indoor
          and outdoor plants.
        </p>
        <p className="text-muted fs-5">
          Whether you're a gardening enthusiast or just beginning your plant
          journey, we provide healthy, easy-to-care plants and helpful tips to
          make them thrive. Our goal is to spread positivity and peace through
          the beauty of nature.
        </p>
        <p className="text-muted fs-5">
          Join us in our green mission and let's grow happiness together 🌿.
        </p>
      </div>
    </div>
    </>
  );
};

export default About;

