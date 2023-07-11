import React from "react";
import "./index.css";
import aboutTeam_1 from "../../assets/team_1.png";
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
              xs={5}
              className="about_team_detail"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "start",
              }}
            >
              <h1 className="Manrope-Bold">
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
            <Grid item xs={6}>
              <div className="about_team_img"></div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default AboutSection;
