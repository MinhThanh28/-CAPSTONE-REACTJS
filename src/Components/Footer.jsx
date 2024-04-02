import React from "react";

const Footer = () => {
  return (
    <footer className="text-light bg-dark pt-4 pb-2">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h4>GET HELP</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">
                  Nike
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">
                  Adidas
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h4>SUPPORT</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-light">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">
                  Phone
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h4>REGISTER</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-decoration-none text-light">
                  Register
                </a>
              </li>
              <li>
                <a href="#" className="text-decoration-none text-light">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          © 2022 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải
        </div>
      </div>
    </footer>
  );
};

export default Footer;
