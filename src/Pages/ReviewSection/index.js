import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import ReviewCard from "../../Component/ReviewCard";
import "./index.css";
import data from "./data.json";
import styles from "../../ModulesCss/mystyle.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

const ReviewSection = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  let reviewcard = data?.review;
  console.log(reviewcard);
  return (
    <section className="review_bg_section">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg={6}>
            {reviewcard?.map((i, index) => (
              <div
                key={index}
                style={{ padding: "12px 0px" }}
                data-aos="fade-left"
              >
                <ReviewCard
                  name={i?.name}
                  designation={i?.designation}
                  detail={i?.detail}
                />
              </div>
            ))}
          </Grid>
          <Grid item lg={6}>
            <div className="review_details_div" data-aos="zoom-in">
              <h6 className={styles?.p_details}>TESTIMONILAS</h6>
              <h1 className={styles.h1_title}>
                What They <br />{" "}
                <span style={{ color: "#6d6875" }}>Say's About Us</span>
              </h1>
              <p className={styles?.p_details}>
                With the greatest performance improvement and massive new
                features, the Salerio template pushes the limits of what is
                possible with a Webflow platform.
              </p>
              <Grid container>
                <Grid xs={6}>
                  <h1 className="customer_no"> 17K+ </h1>
                  <span className={styles?.span_details}>Happy Costumers</span>
                </Grid>
                <Grid xs={6}>
                  <h1 className="project_no"> 2M+ </h1>
                  <span className={styles?.span_details}>
                    Projects Designed
                  </span>
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
