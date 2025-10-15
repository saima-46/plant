import React from "react";
import { plantData } from "../../data/plantdata.js";
import { Link } from "react-router-dom";

const PlantList = () => {
  return (
    <div className="container mt-4">
      
      <div className="row g-4">
        {plantData.map((plant) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={plant.id}>
            <div className="card shadow-sm border-0">
              <img
                src={plant.image}
                alt={plant.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h6 className="fw-semibold text-success">{plant.name}</h6>
                <p className="fw-bold text-dark">${plant.price}</p>
                <Link to={`/plant/${plant?.id}`}>
                  <button className="btn btn-outline-success btn-sm">Buy Now</button>
                </Link>
              
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlantList;
