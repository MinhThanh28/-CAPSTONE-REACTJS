import React, { useEffect } from "react";
import useIndex from "./useIndex";
import { useDispatch, useSelector } from "react-redux";
import { getApiDetailActionAsync } from "../../redux/reducers/productReducer";
import { NavLink, useParams } from "react-router-dom";

const Carousel = () => {
  const { arrProduct } = useIndex();
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {arrProduct.slice(0, 3).map((product, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={product.id}
          >
            <div className="d-flex">
              <div className="flex-fill text-left">
                <img
                  src={product.image}
                  style={{ marginTop: "46px", marginLeft: "102px" }}
                  alt={product.name}
                />
              </div>
              <div className="flex-fill d-flex flex-column justify-content-center text-right pr-3">
                <h5 style={{ textTransform: "uppercase" }}>{product.name}</h5>
                <p>{product.description.slice(0, 50)}</p>
                <NavLink
                  to={`/detail/${product.id}`}
                  className="btn btn-warning align-self-start"
                >
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          style={{ backgroundColor: "#000000", height: "40px", width: "40px" }}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          style={{ backgroundColor: "#000000", height: "40px", width: "40px" }}
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
