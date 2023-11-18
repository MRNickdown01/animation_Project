import React from "react";
import "./index.css";
import aboutTeam_1 from "../../assets/team_1.png";
import Team_2 from "../../assets/Images/post_2.jpg";
import { Container, Grid } from "@mui/material";
const AboutSection = () => {
  return (
    <>
      <section className="about-bg-section">
        {/* <div className="about_section"></div> */}
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={1}></Grid>
            <Grid
              item
              lg={5}
              className="about_team_detail"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "start",
              }}
            >
              <h1 className="Manrope-Bold" data-aos="zoom-in">
                Our Telented Team is
                <strong className="about_heading_imp"> our Strength</strong>
              </h1>
              <p>
                With the greatest performance improvement and massive new
                features, the Salerio template pushes the limits of what is
                possible with a Webflow platform.
              </p>
              <button className="about_more-info">More info</button>
            </Grid>
            <Grid item lg={6}>
              <div className="check">
                <div className="about_team_img"></div>
                <img src={aboutTeam_1} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default AboutSection;
