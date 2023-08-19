import { Container, Grid } from "@mui/material";
import React from "react";
import ReviewCard from "../../Component/ReviewCard";
import "./index.css";
import data from "./data.json";
import styles from "../../ModulesCss/mystyle.module.css";

const ReviewSection = () => {
  let reviewcard = data?.review;
  console.log(reviewcard);
  return (
    <section className="review_bg_section">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            {reviewcard?.map((i, index) => (
              <div key={index} style={{ padding: "12px 0px" }}>
                <ReviewCard
                  name={i?.name}
                  designation={i?.designation}
                  detail={i?.detail}
                />
              </div>
            ))}
          </Grid>
          <Grid item xs={6}>
            <div className="review_details_div">
              <h6>TESTIMONILAS</h6>
              <h1 className={styles.h1_title}>What They Say's About Us</h1>
              <p className={styles?.p_details}>
                With the greatest performance improvement and massive new
                features, the Salerio template pushes the limits of what is
                possible with a Webflow platform.
              </p>
              <Grid container>
                <Grid xs={6}>
                  <h1 className="customer_no"> 17K+ </h1>
                  <h6>Happy Costumers</h6>
                </Grid>
                <Grid xs={5}>
                  <Grid xs={1}></Grid>
                  <h1 className="project_no"> 2M+ </h1>
                  <h6 className="ion-no-margin">Projects Designed</h6>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ReviewSection;
