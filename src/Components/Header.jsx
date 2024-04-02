import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-dark"
        style={{ backgroundColor: "#000000" }}
      >
        {/* logo */}
        <img src="/img/image 3.png" alt="" />
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav ms-auto my-2 my-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                <img src="/img/download (1) 1.png" alt="" />
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                <i className="fa fa-shopping-cart">(1)</i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">
                Register
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* <div className="container mt-3">
        <div className="row text-black">
          <div className="col">
            <NavLink className="nav-link active " to="">
              Home
            </NavLink>
          </div>
          <div className="col">
            <NavLink className="nav-link" to="/men">
              Men
            </NavLink>
          </div>
          <div className="col">
            <NavLink className="nav-link " to="/women">
              Women
            </NavLink>
          </div>
          <div className="col">
            <NavLink className="nav-link " to="/sports">
              Sport
            </NavLink>
          </div>
          <div className="col">
            <NavLink className="nav-link " to="/kids">
              Kid
            </NavLink>
          </div>
        </div>
      </div> */}
      <div className="container mt-3">
        <nav className="nav justify-content-center">
          <NavLink className="nav-link" activeClassName="active-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" activeClassName="active-link" to="/#">
            Men
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="active-link"
            to="/#"
          >
            Women
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="active-link"
            to="/#"
          >
            Sport
          </NavLink>
          <NavLink
            className="nav-link"
            activeClassName="active-link"
            to="/#"
          >
            Kid
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Header;
