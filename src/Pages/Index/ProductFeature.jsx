import React from "react";
import useIndex from "./useIndex";
import { NavLink } from "react-router-dom";

const ProductFeature = () => {
  const { arrProduct } = useIndex();
  return (
    <div>
      <div
        style={{
          width: 689,
          height: 74,
          background: "linear-gradient(180deg, #F21299 0%, #1B02B5 100%)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: 44,
          left: "-4px",
        }}
      >
        <h4>Product Feature</h4>
      </div>

      <div className="container mt-5 pt-5">
        <div className="row">
          {/* <div className="col-md-4 mb-4">
            <div className="card">
              <div className="position-relative">
                <img
                  src="/img/image 5.png"
                  className="card-img-top"
                  alt="Product Image"
                />
                <i
                  className="fa fa-heart position-absolute"
                  style={{ top: 8, right: 8 }}
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">Product Name</h5>
                <p className="card-text">Product description here...</p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <a href="#" className="btn btn-success">
                  Buy Now
                </a>
                <span className="text-muted">$85</span>
              </div>
            </div>
          </div> */}
          {arrProduct.map((product) => {
            return (
              <div className="col-md-4 mb-4" key={product.id}>
                <div className="card">
                  <div className="position-relative">
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="Product Image"
                    />
                    <i
                      className="fa fa-heart position-absolute"
                      style={{ top: 8, right: 8 }}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between">
                    <NavLink
                      to={`/detail/${product.id}`}
                      className="btn btn-success"
                    >
                      Buy Now
                    </NavLink>
                    <span className="text-muted">${product.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductFeature;
