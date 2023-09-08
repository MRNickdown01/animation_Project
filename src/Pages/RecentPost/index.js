import { Container, Grid } from "@mui/material";
import React from "react";
import data from "./post.json";
import post from "../../assets/Images/post_1.jpeg";
const RecentPost = () => {
  let recent_post = data?.Post;
  console.log(recent_post);
  return (
    <section className="recent_post_section">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {recent_post?.map((i, index) => (
            <Grid item xs={6} key={index}>
              <img src={i?.img} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default RecentPost;
