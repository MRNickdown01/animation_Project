import React, { useEffect } from "react";
import "./index.css";
import simpling_girl from "../../assets/Smiling-Girl.png";
import avatar_1 from "../../assets/avatar_1.png";
import avatar_2 from "../../assets/avatar_2.png";

const HeaderSection = () => {
  useEffect(() => {});
  return (
    <section>
      <div className="header-hero-img">
        <img className="aimation-girl-img" src={simpling_girl} />
        <div className="header-hero-text">
          <h1 className="animate__animated animate__fadeInUp">Drozila</h1>
          <div className="hero-circle"></div>
        </div>
        <div className="avtar-fram_1">
          <img src={avatar_1}></img>
        </div>
        <div className="avtar-fram_2">
          <img src={avatar_2}></img>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
