import React, { useEffect, useRef, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import axios from "axios";
import _ from "lodash"; // Đảm bảo rằng bạn đã import lodash

const Search = () => {
  const tuKhoaRef = useRef("");
  const [searchParam, setSearchParam] = useSearchParams();
  const [arrProduct, setArrayProduct] = useState([]);
  const tuKhoa = searchParam.get("tuKhoa");

  useEffect(() => {
    if (tuKhoa) {
      getApiProducts(tuKhoa);
    }
  }, [tuKhoa]);

  const getApiProducts = async (keyword) => {
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
      method: "GET",
    });
    setArrayProduct(res.data.content);
  };

  const handleChange = (e) => {
    tuKhoaRef.current = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParam({ tuKhoa: tuKhoaRef.current });
  };

  const handleSort = (order) => {
    const sortedProducts = _.orderBy(arrProduct, ["price"], [order]);
    setArrayProduct(sortedProducts);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Search</h3>
      <div className="form-group">
        <input
          className="form-control"
          name="tuKhoa"
          id="tuKhoa"
          onChange={handleChange}
        />
        <button className="btn btn-dark my-2">Search</button>
      </div>

      {/* Dropdown Filter */}
      <div className="form-group">
        <select
          className="form-select"
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">Filter</option>
          <option value="asc">Ascending</option>
          <option value="desc">Decrease</option>
        </select>
      </div>

      <div className="content">
        <div
          style={{
            width: "100%",
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
          <h4>Search result</h4>
        </div>
        <div className="row">
          {arrProduct.map((prod) => (
            <div className="col-4 mt-2" key={prod.id}>
              <div className="card">
                <img src={prod.image} alt="..." className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{prod.name}</h5>
                  <p className="card-text">${prod.price}</p>
                  <NavLink
                    to={`/detail/${prod.id}`}
                    className="btn btn-primary"
                  >
                    View detail
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
};

export default Search;
