import React from "react";
import HeaderSection from "../HeaderSection";
import AboutSection from "../AboutSection";

const MainRoutePage = () => {
  return (
    <section className="maine_route_page">
      <div className="header_route">
        <HeaderSection />
      </div>
      <div className="about_route">
        <AboutSection />
      </div>
    </section>
  );
};
export default MainRoutePage;
