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
import React from "react";

const ReviewCard = () => {
  return (
    <Card sx={{ maxWidth: 500, background: "#242227" }}>
      <CardHeader
        sx={{ padding: "16px 16px 0px 16px", margin: "0px" }}
        avatar={<Avatar sx={{ width: 55, height: 55 }} />}
        title={
          <h3
            className="Manrope-Regular"
            style={{
              margin: "0px",
              fontSize: "30px",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Marina Trojnar
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
            Marketing
          </h5>
        }
      />
      <CardContent>
        <p
          style={{ color: "#635f6a", margin: "0px 0px 16px 0px" }}
          className="Manrope-Regular"
        >
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </p>
        <Divider />
        <Grid container alignItems="center" marginY="10px">
          <Grid item xs>
            <Typography gutterBottom component="div" color="#fff">
              Rated <strong style={{ color: "#ef476f" }}>4.5/5</strong>
            </Typography>
          </Grid>
          <Grid item></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
