import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const Card = () => {
  const url = "https://dummyjson.com/products";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const req = await fetch(url);
      const res = await req.json();
      setData(res?.products);
    };
    fetchProduct();
  }, []);

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4 text-success fw-bold">
        🛍️ Product Gallery
      </h2>

      <div className="row g-4">
        {data?.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={item.images[0]}
                className="card-img-top"
                alt={item.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h6 className="card-title text-truncate text-success fw-semibold">
                  {item.title}
                </h6>
                <p className="card-text fs-5 fw-bold text-dark">
                  ${item.price}
                </p>
                <button className="btn btn-success btn-sm px-3">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
