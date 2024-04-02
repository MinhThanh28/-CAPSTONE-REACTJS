import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const HomeTemplate = () => {
  return (
    <div>
      <Header />
      <div className="content" style={{ minHeight: 650, marginBottom: 100 }}>
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default HomeTemplate;
