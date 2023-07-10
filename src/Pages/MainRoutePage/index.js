import React from "react";
import HeaderSection from "../HeaderSection";
import AboutSection from "../AboutSection";
import AmazingProduct from "../AmazingProduct";

const MainRoutePage = () => {
  return (
    <section className="maine_route_page">
      <div className="header_route">
        <HeaderSection />
      </div>
      <div className="about_route">
        <AboutSection />
      </div>
      <div className="product_route">
        <AmazingProduct />
      </div>
    </section>
  );
};
export default MainRoutePage;
