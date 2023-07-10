import { Container, Grid } from "@mui/material";
import React from "react";
import "./index.css";

const AmazingProduct = () => {
  return (
    <section className="product_bg_section">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={1}></Grid>
          <Grid item xs={5}>
            <div className="Product_demo_girl"></div>
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AmazingProduct;
