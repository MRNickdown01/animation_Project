import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  ListItem,
  ListItemText,
  Divider,
  Grid,
} from "@mui/material";
import React, { useEffect } from "react";
import "./index.css";

const ReviewCard = (props) => {
  return (
    <Card sx={{ maxWidth: 600, background: "#242227" }}>
      <CardHeader
        sx={{ padding: "16px 16px 0px 16px", margin: "0px" }}
        avatar={<Avatar sx={{ width: 55, height: 55 }} />}
        title={
          <h3
            className="Manrope-Regular"
            style={{
              margin: "0px",
              fontSize: "25px",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            {props?.name}
          </h3>
        }
        subheader={
          <h5
            className="Manrope-Regular"
            style={{
              margin: "0px",
              fontSize: "16px",
              fontWeight: 500,
              color: "#6d6875",
            }}
          >
            {props?.designation}
          </h5>
        }
      />
      <CardContent>
        <p
          style={{ color: "#635f6a", margin: "0px 0px 16px 0px" }}
          className="Manrope-Regular"
        >
          {props?.detail}
        </p>
        <Divider />
        <Grid container alignItems="center" marginY="10px">
          <Grid item xs={5}>
            <Typography gutterBottom component="div" color="#fff">
              Rated <strong style={{ color: "#ef476f" }}>4.5/5</strong>
            </Typography>
          </Grid>
          <Grid
            className="review_card"
            xs={6}
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "end",
            }}
          >
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
