import { Container, Grid } from "@mui/material";
import React from "react";
import ReviewCard from "../../Component/ReviewCard";
import "./index.css";

const ReviewSection = () => {
  return (
    <section className="review_bg_section">
      <Container maxWidth="lg">
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <ReviewCard />
        </Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={1}></Grid>
      </Container>
    </section>
  );
};

export default ReviewSection;
