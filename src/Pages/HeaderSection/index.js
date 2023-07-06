import React, { useEffect } from "react";
import "./index.css";
import simpling_girl from "../../assets/Smiling-Girl.png";

const HeaderSection = () => {
  useEffect(() => {});
  return (
    <section>
      <div className="header-hero-img">
        <div className="header-hero-text">
          <img className="aimation-girl-img" src={simpling_girl} />
          <h1 className="animate__animated animate__fadeInUp">Drozila</h1>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
