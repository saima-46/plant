import React from "react";
import { useParams, Link } from "react-router-dom";
import { plantData } from "../../data/plantdata";

const SinglePage = () => {
  const { id } = useParams(); // ✅ Get plant id from URL
  const data = [...plantData]; // copy data array (optional)
  const singleData = data.find((item) => item.id === Number(id)); // ✅ find by ID safely

  // ✅ Handle case: ID not found
  if (!singleData) {
    return (
      <div className="container text-center mt-5">
        <h4 className="text-danger">Plant not found!</h4>
        <Link to="/" className="btn btn-outline-success mt-3">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div
        className="row align-items-center shadow-sm rounded-4 p-4"
        style={{ maxWidth: "900px", margin: "0 auto", backgroundColor: "#f6fff8" }}
      >
        {/* ✅ Image Section */}
        <div className="col-12 col-md-5 text-center mb-3 mb-md-0">
          <img
            src={singleData.image}
            alt={singleData.name}
            className="img-fluid rounded-4"
            style={{ maxHeight: "300px", objectFit: "cover" }}
          />
        </div>

        {/* ✅ Details Section */}
        <div className="col-12 col-md-7">
          <h3 className="fw-bold text-success">{singleData.name}</h3>
          <p className="text-muted small mb-2">
            Category: <span className="fw-semibold">{singleData.category}</span>
          </p>
          <p className="mb-3">{singleData.description}</p>
          <h5 className="fw-bold text-dark">${singleData.price}</h5>
          <button className="btn btn-success me-2">Add to Cart</button>
          <Link to="/product" className="btn btn-outline-success">
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
