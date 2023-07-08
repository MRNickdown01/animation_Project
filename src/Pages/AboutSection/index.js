import React from "react";
import "./index.css";
import aboutTeam_1 from "../../assets/team_1.png";
const AboutSection = () => {
  return (
    <>
      <section className="about-bg-section">
        <div className="about_section">
          <div className="about_team_detail">
            <h1>
              Our Telented Team
              <strong className="about_heading_imp"> Is our Strength</strong>
            </h1>
            <p>
              With the greatest performance improvement and massive new
              features, the Salerio template pushes the limits of what is
              possible with a Webflow platform.
            </p>
          </div>
          <div className="about_team_img"></div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
