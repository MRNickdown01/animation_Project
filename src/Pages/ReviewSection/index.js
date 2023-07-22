import { Container, Grid } from "@mui/material";
import React from "react";
import ReviewCard from "../../Component/ReviewCard";
import "./index.css";
import data from "./data.json";

const ReviewSection = () => {
  let reviewcard = data?.review;
  console.log(reviewcard);
  return (
    <section className="review_bg_section">
      <Container maxWidth="lg">
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
        <Grid item xs={5}></Grid>
        <Grid item xs={1}></Grid>
      </Container>
    </section>
  );
};

export default ReviewSection;
