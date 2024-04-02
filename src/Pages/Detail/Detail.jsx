import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getApiDetailActionAsync } from "../../redux/reducers/productReducer";

const Detail = () => {
  const params = useParams();
  const { prodDetail } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();
  console.log(prodDetail);

  const getApiProductDetail = async () => {
    const action = getApiDetailActionAsync(params.id);
    dispatch(action);
  };

  useEffect(() => {
    getApiProductDetail();
  }, [params.id]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div
          className="col-md-5"
          style={{
            position: "relative",
            height: "355px",
            top: "58px",
            left: "64px",
          }}
        >
          <img
            src={prodDetail.image}
            alt={prodDetail.name}
            style={{
              width: "220px",
              height: "156px",
              position: "absolute",
              top: "109px",
              left: "57px",
            }}
          />
        </div>
        <div className="col-md-7">
          <h1 style={{ textTransform: "uppercase" }}>{prodDetail.name}</h1>
          <p>{prodDetail.description}</p>
          <div style={{ color: prodDetail.quantity > 0 ? "green" : "red" }}>
            Available size {prodDetail.quantity > 0 ? "" : "Unavailable"}
          </div>
          {/* <div>
            {prodDetail.size.map((size) => (
              <button
                key={size}
                className="btn btn-outline-secondary m-1 active"
              >
                {size}
              </button>
            ))}
          </div> */}
          <div>
            {Array.isArray(prodDetail.size)
              ? prodDetail.size.map((size) => (
                  <button
                    key={size}
                    className="btn btn-outline-secondary m-1 active"
                  >
                    {size}
                  </button>
                ))
              : null}
          </div>
          <div className="my-3">
            <strong>${prodDetail.price}</strong>
          </div>
          <div className="d-flex align-items-center my-2">
            <button className="btn btn-secondary mx-2">-</button>
            <span>1</span>
            <button className="btn btn-secondary mx-2">+</button>
          </div>
          <button className="btn btn-warning">Add to cart</button>
        </div>
      </div>

      <div className="row mt-2">
        <h3>Related Product</h3>
        {prodDetail.relatedProducts?.map((prod) => {
          //optional chaining
          return (
            <div className="col-4" key={prod.id}>
              <div className="card">
                <img src={prod.image} alt="..." />
                <div className="card-body">
                  <h3>{prod.name}</h3>
                  <p>{prod.price} $</p>
                  <NavLink
                    to={`/detail/${prod.id}`}
                    className="btn btn-primary"
                  >
                    Detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Detail;
